import { Check, FileSpreadsheet, Star } from "lucide-react";
import { Button } from "./ui/button";

export default function ChatDemo() {
  return (
    <div className="flex h-[550px]">
      {/* Left Sidebar */}

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold">National Electric Companies</h2>
          <p className="text-sm text-gray-500">M&A Research</p>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* User Message */}
          <div className="flex justify-end">
            <div className="bg-cyan-500 text-white px-4 py-3 rounded-2xl rounded-tr-sm max-w-md shadow-sm">
              <p className="text-sm leading-relaxed">
              Conduct comprehensive due diligence on these target entities and synthesize the available datasets into an executive summary.
              </p>
            </div>
          </div>

          {/* AI Response */}
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
              <img src="/eudox-logo-white.svg" alt="Eudox" className="w-5 h-5" />
            </div>
            <div className="flex-1 space-y-4">
              <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-2xl rounded-tl-sm">
                <p className="text-sm">
                  Welcome to your National Electric Companies project! I can see you've uploaded a list of 26 companies. To get started, please select which companies you'd like me to research first, or I can begin with all companies in your uploaded file.
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

                
              </div>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <input
              type="text"
              placeholder="Ask Eudox..."
              className="flex-1 bg-transparent border-none outline-none text-sm"
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
}
