import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Shield, Download, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Admin() {
  const [, setLocation] = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  
  const { data: user, isLoading: userLoading } = trpc.auth.me.useQuery();
  const { data: requests, isLoading: requestsLoading, error } = trpc.earlyAccess.list.useQuery(
    undefined,
    {
      enabled: user?.role === "admin",
      retry: false,
    }
  );

  useEffect(() => {
    if (!userLoading && !user) {
      toast.error("Please sign in to access the admin dashboard");
      setLocation("/");
    } else if (!userLoading && user && user.role !== "admin") {
      toast.error("You do not have permission to access this page");
      setLocation("/");
    }
  }, [user, userLoading, setLocation]);

  useEffect(() => {
    if (error) {
      toast.error("Failed to load early access requests");
    }
  }, [error]);

  const filteredRequests = requests?.filter((req) => {
    const search = searchTerm.toLowerCase();
    return (
      req.firstName.toLowerCase().includes(search) ||
      req.lastName.toLowerCase().includes(search) ||
      req.email.toLowerCase().includes(search) ||
      req.company.toLowerCase().includes(search) ||
      req.role.toLowerCase().includes(search)
    );
  });

  const exportToCSV = () => {
    if (!requests || requests.length === 0) {
      toast.error("No data to export");
      return;
    }

    const headers = ["ID", "First Name", "Last Name", "Email", "Company", "Role", "Message", "Created At"];
    const csvData = requests.map((req) => [
      req.id,
      req.firstName,
      req.lastName,
      req.email,
      req.company,
      req.role,
      req.message || "",
      new Date(req.createdAt).toLocaleString(),
    ]);

    const csvContent = [
      headers.join(","),
      ...csvData.map((row) => row.map((cell) => `"${cell}"`).join(",")),
    ].join("\\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `early-access-requests-${new Date().toISOString().split("T")[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
    toast.success("CSV exported successfully");
  };

  if (userLoading || requestsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user || user.role !== "admin") {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Shield className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-muted-foreground">Manage early access requests</p>
            </div>
          </div>
          <Button onClick={() => setLocation("/")} variant="outline">
            Back to Home
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Early Access Requests</CardTitle>
            <CardDescription>
              Total requests: {requests?.length || 0}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, email, company, or role..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button onClick={exportToCSV} variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Export CSV
              </Button>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead>Created At</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredRequests && filteredRequests.length > 0 ? (
                    filteredRequests.map((req) => (
                      <TableRow key={req.id}>
                        <TableCell className="font-medium">{req.id}</TableCell>
                        <TableCell>
                          {req.firstName} {req.lastName}
                        </TableCell>
                        <TableCell>{req.email}</TableCell>
                        <TableCell>{req.company}</TableCell>
                        <TableCell>{req.role}</TableCell>
                        <TableCell className="max-w-xs truncate">
                          {req.message || "-"}
                        </TableCell>
                        <TableCell>
                          {new Date(req.createdAt).toLocaleDateString()}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center text-muted-foreground">
                        {searchTerm ? "No matching requests found" : "No early access requests yet"}
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
