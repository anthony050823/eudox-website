import { describe, it, expect, vi, beforeEach } from 'vitest';
import { appRouter } from './routers';
import * as db from './db';
import * as notification from './_core/notification';

// Mock the database functions
vi.mock('./db', () => ({
  createEarlyAccessRequest: vi.fn(),
  getAllEarlyAccessRequests: vi.fn(),
  createFeedbackSubmission: vi.fn(),
  getAllFeedbackSubmissions: vi.fn(),
}));

// Mock the notification function
vi.mock('./_core/notification', () => ({
  notifyOwner: vi.fn(),
}));

describe('Early Access Form Submission', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should successfully submit early access request with valid data', async () => {
    const mockCreateEarlyAccessRequest = vi.mocked(db.createEarlyAccessRequest);
    const mockNotifyOwner = vi.mocked(notification.notifyOwner);
    
    mockCreateEarlyAccessRequest.mockResolvedValue(undefined);
    mockNotifyOwner.mockResolvedValue(true);

    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    const input = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      company: 'Test Company',
      role: 'CEO',
      message: 'Interested in early access',
    };

    const result = await caller.earlyAccess.submit(input);

    expect(result).toEqual({ success: true });
    expect(mockCreateEarlyAccessRequest).toHaveBeenCalledWith({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      company: 'Test Company',
      role: 'CEO',
      message: 'Interested in early access',
    });
    
    // Should send notification to owner
    expect(mockNotifyOwner).toHaveBeenCalledWith({
      title: 'New Early Access Request',
      content: expect.stringContaining('John Doe'),
    });
    
    // Should send confirmation email to user
    expect(mockNotifyOwner).toHaveBeenCalledWith({
      title: expect.stringContaining('Early Access Request Received'),
      content: expect.stringContaining('Thank you for your interest'),
    });
    
    expect(mockNotifyOwner).toHaveBeenCalledTimes(2);
  });

  it('should reject early access request with invalid email', async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    const input = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'invalid-email',
      company: 'Test Company',
      role: 'CEO',
    };

    await expect(caller.earlyAccess.submit(input)).rejects.toThrow();
  });

  it('should reject early access request with missing required fields', async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    const input = {
      firstName: '',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      company: 'Test Company',
      role: 'CEO',
    };

    await expect(caller.earlyAccess.submit(input)).rejects.toThrow();
  });
});

describe('Feedback Form Submission', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should successfully submit feedback with valid data', async () => {
    const mockCreateFeedbackSubmission = vi.mocked(db.createFeedbackSubmission);
    const mockNotifyOwner = vi.mocked(notification.notifyOwner);
    
    mockCreateFeedbackSubmission.mockResolvedValue(undefined);
    mockNotifyOwner.mockResolvedValue(true);

    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    const input = {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      message: 'Great product! Would love to see feature X.',
    };

    const result = await caller.feedback.submit(input);

    expect(result).toEqual({ success: true });
    expect(mockCreateFeedbackSubmission).toHaveBeenCalledWith({
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      message: 'Great product! Would love to see feature X.',
    });
    
    // Should send notification to owner
    expect(mockNotifyOwner).toHaveBeenCalledWith({
      title: 'New Feedback Submission',
      content: expect.stringContaining('Jane Smith'),
    });
    
    // Should send confirmation email to user
    expect(mockNotifyOwner).toHaveBeenCalledWith({
      title: expect.stringContaining('Feedback Received'),
      content: expect.stringContaining('Thank you for sharing your feedback'),
    });
    
    expect(mockNotifyOwner).toHaveBeenCalledTimes(2);
  });

  it('should reject feedback with invalid email', async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    const input = {
      name: 'Jane Smith',
      email: 'not-an-email',
      message: 'Great product!',
    };

    await expect(caller.feedback.submit(input)).rejects.toThrow();
  });

  it('should reject feedback with empty message', async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    const input = {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      message: '',
    };

    await expect(caller.feedback.submit(input)).rejects.toThrow();
  });
});

describe('Admin Dashboard Queries', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should allow admin to list early access requests', async () => {
    const mockGetAllEarlyAccessRequests = vi.mocked(db.getAllEarlyAccessRequests);
    
    const mockData = [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        company: 'Test Co',
        role: 'CEO',
        message: null,
        createdAt: new Date(),
      },
    ];
    
    mockGetAllEarlyAccessRequests.mockResolvedValue(mockData);

    const caller = appRouter.createCaller({
      user: { id: '1', email: 'admin@eudox.ai', role: 'admin', name: 'Admin' },
      req: {} as any,
      res: {} as any,
    });

    const result = await caller.earlyAccess.list();

    expect(result).toEqual(mockData);
    expect(mockGetAllEarlyAccessRequests).toHaveBeenCalledTimes(1);
  });

  it('should allow admin to list feedback submissions', async () => {
    const mockGetAllFeedbackSubmissions = vi.mocked(db.getAllFeedbackSubmissions);
    
    const mockData = [
      {
        id: 1,
        name: 'Jane Smith',
        email: 'jane@example.com',
        message: 'Great product!',
        createdAt: new Date(),
      },
    ];
    
    mockGetAllFeedbackSubmissions.mockResolvedValue(mockData);

    const caller = appRouter.createCaller({
      user: { id: '1', email: 'admin@eudox.ai', role: 'admin', name: 'Admin' },
      req: {} as any,
      res: {} as any,
    });

    const result = await caller.feedback.list();

    expect(result).toEqual(mockData);
    expect(mockGetAllFeedbackSubmissions).toHaveBeenCalledTimes(1);
  });

  it('should reject non-admin users from listing early access requests', async () => {
    const caller = appRouter.createCaller({
      user: { id: '2', email: 'user@example.com', role: 'user', name: 'User' },
      req: {} as any,
      res: {} as any,
    });

    await expect(caller.earlyAccess.list()).rejects.toThrow();
  });

  it('should reject unauthenticated users from listing feedback submissions', async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    await expect(caller.feedback.list()).rejects.toThrow();
  });
});
