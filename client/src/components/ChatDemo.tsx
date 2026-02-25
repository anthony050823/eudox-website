import { Check, FileSpreadsheet, Star } from "lucide-react";
import { Button } from "./ui/button";

export default function ChatDemo() {
  return (
    <div className="flex h-[550px]">
      {/* Left Sidebar */}
      <div className="w-80 bg-gray-50 dark:bg-gray-800/50 border-r border-gray-200 dark:border-gray-700 flex flex-col">
        {/* Logo and Search */}
        <div className="p-4 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">E</span>
            </div>
            <span className="font-semibold text-lg">Chat</span>
          </div>
          
          <input
            type="text"
            placeholder="Search Project"
            className="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm"
          />
        </div>

        {/* Tabs */}
        <div className="px-4 flex border-b border-gray-200 dark:border-gray-700">
          <button className="px-4 py-2 text-sm font-medium border-b-2 border-gray-900 dark:border-white">
            Active(0)
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-500">
            Closed(1)
          </button>
        </div>

        {/* Project List */}
        <div className="flex-1 p-4">
          <button className="w-full px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg mb-2">
            + Add a New Project
          </button>
          
          <div className="flex items-center gap-2 px-4 py-3 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg border-l-2 border-cyan-500">
            <div className="w-2 h-2 bg-cyan-500 rounded-full" />
            <span className="text-sm font-medium">electric</span>
          </div>
        </div>

        {/* Credit Usage */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Credit Usage
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">Daily Token Allowance</span>
            <span className="font-medium">0 / 999,999</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">Current Plan</span>
            <span className="font-medium">Admin</span>
          </div>
          <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">
            Upgrade Now
          </Button>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold">electric</h2>
          <p className="text-sm text-gray-500">M&A Research</p>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* User Message */}
          <div className="flex justify-end">
            <div className="bg-cyan-500 text-white px-4 py-2 rounded-2xl rounded-tr-sm max-w-md">
              do deep research on these companies, and detail the data
            </div>
          </div>

          {/* AI Response */}
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-xs">AI</span>
            </div>
            <div className="flex-1 space-y-4">
              <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-2xl rounded-tl-sm">
                <p className="text-sm">
                  Welcome to your electric! I can see you've uploaded a list of 26 companies. To get started, please select which companies you'd like me to research first, or I can begin with all companies in your uploaded file.
                </p>
              </div>

              {/* File Display */}
              <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <FileSpreadsheet className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-sm">electric.xlsx</div>
                  <div className="text-xs text-gray-500">26 companies • 2 selected</div>
                </div>
              </div>

              {/* Question */}
              <div className="text-sm font-medium">
                What would you like me to research?
              </div>

              {/* Button Group */}
              <div className="flex gap-2">
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
                  2 selected companies
                </Button>
                <Button variant="outline">
                  Custom selection
                </Button>
              </div>

              {/* Progress Card */}
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-medium">Preview: electric.xlsx</div>
                  <div className="text-sm text-cyan-500 font-medium">Processing: 100%</div>
                </div>

                {/* Company Table */}
                <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase text-xs">Company</th>
                        <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase text-xs">Priority</th>
                        <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase text-xs">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      <tr>
                        <td className="px-4 py-3">Gordon Electric Supply</td>
                        <td className="px-4 py-3">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        </td>
                        <td className="px-4 py-3">
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">Two Wire Electric Supply Co</td>
                        <td className="px-4 py-3">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        </td>
                        <td className="px-4 py-3">
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" className="text-red-600 border-red-300 hover:bg-red-50">
                    Additional Research
                  </Button>
                  <Button variant="outline" className="text-green-600 border-green-300 hover:bg-green-50">
                    Excel Edit
                  </Button>
                  <Button variant="outline" className="text-blue-600 border-blue-300 hover:bg-blue-50">
                    Report Generation
                  </Button>
                  <Button variant="outline" className="text-gray-600 border-gray-300 hover:bg-gray-50">
                    Q&A
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <input
              type="text"
              placeholder="Select an agent to continue..."
              className="flex-1 bg-transparent border-none outline-none text-sm"
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
}
