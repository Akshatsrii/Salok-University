import { useState, useRef } from 'react';

export default function PaymentReceipt() {
  const [selectedReceipt, setSelectedReceipt] = useState(null);
  const [searchId, setSearchId] = useState('');
  const receiptRef = useRef(null);

  // Sample receipt data - replace with API call
  const receiptData = {
    id: 'TXN202512345',
    receiptNumber: 'RCP/2024/0145',
    date: '2024-02-05',
    studentInfo: {
      name: 'Rahul Kumar',
      rollNo: 'CS21B1025',
      course: 'B.Tech Computer Science',
      semester: 'Spring 2024',
      academicYear: '2023-24',
      email: 'rahul.kumar@student.college.edu',
      phone: '+91 98765 43210'
    },
    institutionInfo: {
      name: 'ABC College of Engineering',
      address: '123 College Road, University Area',
      city: 'Jaipur, Rajasthan - 302001',
      phone: '+91 141 1234567',
      email: 'accounts@college.edu',
      website: 'www.college.edu',
      gstin: '08AABCU9603R1ZM'
    },
    payment: {
      purpose: 'Semester Fee',
      category: 'Academic Fee',
      amount: 38500,
      cgst: 0,
      sgst: 0,
      totalAmount: 38500,
      status: 'paid',
      method: 'Online Banking',
      transactionId: 'TXN202512345',
      bankRefNo: 'BRN987654321',
      paidDate: '2024-02-05 14:35:22',
      dueDate: '2024-02-10'
    },
    breakdown: [
      { item: 'Tuition Fee', amount: 30000 },
      { item: 'Lab Fee', amount: 5000 },
      { item: 'Library Fee', amount: 2000 },
      { item: 'Exam Fee', amount: 1500 }
    ],
    remarks: 'Payment received successfully. This is a computer-generated receipt and does not require a signature.',
    generatedBy: 'Accounts Office',
    generatedDate: '2024-02-05 14:35:30'
  };

  // Sample recent receipts
  const recentReceipts = [
    {
      id: 'TXN202512345',
      receiptNumber: 'RCP/2024/0145',
      date: '2024-02-05',
      purpose: 'Semester Fee',
      amount: 38500,
      status: 'paid'
    },
    {
      id: 'TXN202512244',
      receiptNumber: 'RCP/2024/0132',
      date: '2024-02-01',
      purpose: 'Hostel Fee',
      amount: 45000,
      status: 'paid'
    },
    {
      id: 'TXN202512123',
      receiptNumber: 'RCP/2024/0119',
      date: '2024-01-28',
      purpose: 'Library Fine',
      amount: 150,
      status: 'paid'
    }
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const formatDateTime = (dateString) => {
    return new Date(dateString).toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const numberToWords = (num) => {
    const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];

    const convertLessThanThousand = (n) => {
      if (n === 0) return '';
      if (n < 10) return ones[n];
      if (n < 20) return teens[n - 10];
      if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 ? ' ' + ones[n % 10] : '');
      return ones[Math.floor(n / 100)] + ' Hundred' + (n % 100 ? ' ' + convertLessThanThousand(n % 100) : '');
    };

    if (num === 0) return 'Zero';
    
    const crore = Math.floor(num / 10000000);
    const lakh = Math.floor((num % 10000000) / 100000);
    const thousand = Math.floor((num % 100000) / 1000);
    const remainder = num % 1000;

    let result = '';
    if (crore) result += convertLessThanThousand(crore) + ' Crore ';
    if (lakh) result += convertLessThanThousand(lakh) + ' Lakh ';
    if (thousand) result += convertLessThanThousand(thousand) + ' Thousand ';
    if (remainder) result += convertLessThanThousand(remainder);

    return result.trim() + ' Rupees Only';
  };

  const handleDownload = () => {
    // In production, this would generate a PDF
    alert('Downloading receipt as PDF...');
    // Implementation would use libraries like jsPDF or html2canvas
  };

  const handlePrint = () => {
    window.print();
  };

  const handleEmail = () => {
    alert(`Receipt will be sent to ${receiptData.studentInfo.email}`);
  };

  const handleSearch = () => {
    if (searchId) {
      alert(`Searching for receipt: ${searchId}`);
      // In production, this would fetch receipt from API
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow max-w-4xl mx-auto">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold text-primary">Payment Receipt</h2>
            <p className="text-sm text-gray-500 mt-1">View and download payment receipts</p>
          </div>
        </div>

        {/* Search Receipt */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter Transaction ID or Receipt Number..."
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <button
            onClick={handleSearch}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 font-medium"
          >
            Search
          </button>
        </div>
      </div>

      {/* Recent Receipts */}
      <div className="p-6 border-b border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-4">Recent Receipts</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {recentReceipts.map((receipt) => (
            <button
              key={receipt.id}
              onClick={() => setSelectedReceipt(receipt.id)}
              className={`p-4 rounded-lg border-2 text-left transition-all ${
                selectedReceipt === receipt.id
                  ? 'border-primary bg-primary/5'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-xs font-mono text-gray-600">{receipt.receiptNumber}</span>
                <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">
                  {receipt.status}
                </span>
              </div>
              <p className="font-medium text-gray-900 mb-1">{receipt.purpose}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">{formatDate(receipt.date)}</span>
                <span className="font-semibold text-primary">{formatCurrency(receipt.amount)}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Receipt Preview */}
      <div className="p-6">
        <div ref={receiptRef} className="border-2 border-gray-300 rounded-lg bg-white">
          {/* Receipt Header */}
          <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-6">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-bold mb-1">{receiptData.institutionInfo.name}</h1>
                <p className="text-sm opacity-90">{receiptData.institutionInfo.address}</p>
                <p className="text-sm opacity-90">{receiptData.institutionInfo.city}</p>
                <div className="mt-2 space-y-0.5 text-sm opacity-90">
                  <p>📞 {receiptData.institutionInfo.phone}</p>
                  <p>✉️ {receiptData.institutionInfo.email}</p>
                  <p>🌐 {receiptData.institutionInfo.website}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="bg-white text-primary px-4 py-2 rounded-lg">
                  <p className="text-xs font-medium">RECEIPT</p>
                  <p className="text-lg font-bold">{receiptData.receiptNumber}</p>
                </div>
                <p className="text-sm mt-2 opacity-90">GSTIN: {receiptData.institutionInfo.gstin}</p>
              </div>
            </div>
          </div>

          {/* Receipt Body */}
          <div className="p-6 space-y-6">
            {/* Student Information */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span>👤</span> Student Details
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex">
                    <span className="text-gray-600 w-24">Name:</span>
                    <span className="font-medium text-gray-900">{receiptData.studentInfo.name}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-24">Roll No:</span>
                    <span className="font-medium text-gray-900">{receiptData.studentInfo.rollNo}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-24">Course:</span>
                    <span className="font-medium text-gray-900">{receiptData.studentInfo.course}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-24">Semester:</span>
                    <span className="font-medium text-gray-900">{receiptData.studentInfo.semester}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span>💳</span> Payment Details
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex">
                    <span className="text-gray-600 w-32">Transaction ID:</span>
                    <span className="font-medium text-gray-900 font-mono">{receiptData.payment.transactionId}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-32">Bank Ref No:</span>
                    <span className="font-medium text-gray-900 font-mono">{receiptData.payment.bankRefNo}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-32">Payment Date:</span>
                    <span className="font-medium text-gray-900">{formatDateTime(receiptData.payment.paidDate)}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-32">Payment Mode:</span>
                    <span className="font-medium text-gray-900">{receiptData.payment.method}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Fee Breakdown Table */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Fee Breakdown</h3>
              <table className="w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">S.No</th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">Description</th>
                    <th className="border border-gray-300 px-4 py-2 text-right text-sm font-semibold">Amount (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {receiptData.breakdown.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 text-sm">{index + 1}</td>
                      <td className="border border-gray-300 px-4 py-2 text-sm">{item.item}</td>
                      <td className="border border-gray-300 px-4 py-2 text-sm text-right font-medium">
                        {formatCurrency(item.amount)}
                      </td>
                    </tr>
                  ))}
                  
                  {receiptData.payment.cgst > 0 && (
                    <>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 text-sm"></td>
                        <td className="border border-gray-300 px-4 py-2 text-sm">CGST</td>
                        <td className="border border-gray-300 px-4 py-2 text-sm text-right font-medium">
                          {formatCurrency(receiptData.payment.cgst)}
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 text-sm"></td>
                        <td className="border border-gray-300 px-4 py-2 text-sm">SGST</td>
                        <td className="border border-gray-300 px-4 py-2 text-sm text-right font-medium">
                          {formatCurrency(receiptData.payment.sgst)}
                        </td>
                      </tr>
                    </>
                  )}

                  <tr className="bg-primary/10">
                    <td className="border border-gray-300 px-4 py-3 text-sm font-bold" colSpan="2">
                      Total Amount
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-right font-bold text-primary text-lg">
                      {formatCurrency(receiptData.payment.totalAmount)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Amount in Words */}
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
              <p className="text-sm font-semibold text-gray-700 mb-1">Amount in Words:</p>
              <p className="text-sm text-gray-900 italic">
                {numberToWords(receiptData.payment.totalAmount)}
              </p>
            </div>

            {/* Payment Status */}
            <div className="flex items-center justify-center">
              <div className="bg-green-100 border-2 border-green-500 rounded-lg px-6 py-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">✓</span>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-green-900">PAYMENT SUCCESSFUL</p>
                    <p className="text-sm text-green-700">Transaction completed successfully</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Remarks */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <p className="text-xs text-blue-900">
                <span className="font-semibold">Note:</span> {receiptData.remarks}
              </p>
            </div>

            {/* Footer */}
            <div className="border-t-2 border-gray-300 pt-4 mt-6">
              <div className="flex justify-between items-end text-xs text-gray-600">
                <div>
                  <p>Generated by: {receiptData.generatedBy}</p>
                  <p>Generated on: {formatDateTime(receiptData.generatedDate)}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900 mb-1">For {receiptData.institutionInfo.name}</p>
                  <div className="border-t border-gray-400 w-40 mt-8 pt-1">
                    <p>Authorized Signatory</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Watermark */}
          <div className="text-center py-4 bg-gray-50 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              This is a computer-generated receipt and is valid without signature
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mt-6">
          <button
            onClick={handleDownload}
            className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 active:scale-95 transition-all shadow-sm"
          >
            <span>📥</span> Download PDF
          </button>
          <button
            onClick={handlePrint}
            className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-800 active:scale-95 transition-all shadow-sm"
          >
            <span>🖨️</span> Print
          </button>
          <button
            onClick={handleEmail}
            className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 active:scale-95 transition-all shadow-sm"
          >
            <span>✉️</span> Email Receipt
          </button>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx>{`
        @media print {
          body * {
            visibility: hidden;
          }
          ${receiptRef.current} * {
            visibility: visible;
          }
          ${receiptRef.current} {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}