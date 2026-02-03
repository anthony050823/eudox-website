import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Search, Loader2 } from "lucide-react";
import { format } from "date-fns";

export default function Admin() {
  const [earlyAccessSearch, setEarlyAccessSearch] = useState("");
  const [feedbackSearch, setFeedbackSearch] = useState("");

  const { data: earlyAccessRequests, isLoading: earlyAccessLoading } = trpc.earlyAccess.list.useQuery();
  const { data: feedbackSubmissions, isLoading: feedbackLoading } = trpc.feedback.list.useQuery();

  const filteredEarlyAccess = earlyAccessRequests?.filter(
    (req) =>
      req.firstName.toLowerCase().includes(earlyAccessSearch.toLowerCase()) ||
      req.lastName.toLowerCase().includes(earlyAccessSearch.toLowerCase()) ||
      req.email.toLowerCase().includes(earlyAccessSearch.toLowerCase()) ||
      req.company.toLowerCase().includes(earlyAccessSearch.toLowerCase())
  );

  const filteredFeedback = feedbackSubmissions?.filter(
    (feedback) =>
      feedback.name.toLowerCase().includes(feedbackSearch.toLowerCase()) ||
      feedback.email.toLowerCase().includes(feedbackSearch.toLowerCase()) ||
      feedback.message.toLowerCase().includes(feedbackSearch.toLowerCase())
  );

  const exportToCSV = (data: any[], filename: string) => {
    if (!data || data.length === 0) return;

    const headers = Object.keys(data[0]);
    const csvContent = [
      headers.join(","),
      ...data.map((row) =>
        headers
          .map((header) => {
            const value = row[header];
            // Handle dates
            if (value instanceof Date) {
              return `"${format(value, "yyyy-MM-dd HH:mm:ss")}"`;
            }
            // Escape quotes and wrap in quotes if contains comma
            const stringValue = String(value || "");
            if (stringValue.includes(",") || stringValue.includes('"')) {
              return `"${stringValue.replace(/"/g, '""')}"`;
            }
            return stringValue;
          })
          .join(",")
      ),
    ].join("\\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `${filename}_${format(new Date(), "yyyy-MM-dd")}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage early access requests and feedback submissions</p>
        </div>

        <Tabs defaultValue="early-access" className="space-y-6">
          <TabsList>
            <TabsTrigger value="early-access">
              Early Access Requests
              {earlyAccessRequests && ` (${earlyAccessRequests.length})`}
            </TabsTrigger>
            <TabsTrigger value="feedback">
              Feedback Submissions
              {feedbackSubmissions && ` (${feedbackSubmissions.length})`}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="early-access">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <CardTitle>Early Access Requests</CardTitle>
                    <CardDescription>View and manage early access signups</CardDescription>
                  </div>
                  <div className="flex gap-2 w-full sm:w-auto">
                    <div className="relative flex-1 sm:flex-initial sm:w-64">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search..."
                        value={earlyAccessSearch}
                        onChange={(e) => setEarlyAccessSearch(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => exportToCSV(earlyAccessRequests || [], "early_access_requests")}
                      disabled={!earlyAccessRequests || earlyAccessRequests.length === 0}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {earlyAccessLoading ? (
                  <div className="flex justify-center py-8">
                    <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                  </div>
                ) : filteredEarlyAccess && filteredEarlyAccess.length > 0 ? (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Company</TableHead>
                          <TableHead>Role</TableHead>
                          <TableHead>Message</TableHead>
                          <TableHead>Date</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredEarlyAccess.map((request) => (
                          <TableRow key={request.id}>
                            <TableCell className="font-medium">
                              {request.firstName} {request.lastName}
                            </TableCell>
                            <TableCell>{request.email}</TableCell>
                            <TableCell>{request.company}</TableCell>
                            <TableCell>{request.role}</TableCell>
                            <TableCell className="max-w-xs truncate">{request.message || "-"}</TableCell>
                            <TableCell className="whitespace-nowrap">
                              {format(new Date(request.createdAt), "MMM d, yyyy")}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    {earlyAccessSearch ? "No results found" : "No early access requests yet"}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="feedback">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <CardTitle>Feedback Submissions</CardTitle>
                    <CardDescription>View and manage user feedback</CardDescription>
                  </div>
                  <div className="flex gap-2 w-full sm:w-auto">
                    <div className="relative flex-1 sm:flex-initial sm:w-64">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search..."
                        value={feedbackSearch}
                        onChange={(e) => setFeedbackSearch(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => exportToCSV(feedbackSubmissions || [], "feedback_submissions")}
                      disabled={!feedbackSubmissions || feedbackSubmissions.length === 0}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {feedbackLoading ? (
                  <div className="flex justify-center py-8">
                    <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                  </div>
                ) : filteredFeedback && filteredFeedback.length > 0 ? (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Message</TableHead>
                          <TableHead>Date</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredFeedback.map((feedback) => (
                          <TableRow key={feedback.id}>
                            <TableCell className="font-medium">{feedback.name}</TableCell>
                            <TableCell>{feedback.email}</TableCell>
                            <TableCell className="max-w-md">{feedback.message}</TableCell>
                            <TableCell className="whitespace-nowrap">
                              {format(new Date(feedback.createdAt), "MMM d, yyyy")}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    {feedbackSearch ? "No results found" : "No feedback submissions yet"}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
