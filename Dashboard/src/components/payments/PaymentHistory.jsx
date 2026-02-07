import { useState, useMemo } from 'react';

export default function PaymentHistory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPurpose, setFilterPurpose] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');
  const [dateRange, setDateRange] = useState('all');
  const [selectedPayments, setSelectedPayments] = useState([]);

  // Sample payment data - replace with API call
  const paymentData = [
    {
      id: 'PAY2024001',
      date: '2024-02-05',
      purpose: 'Semester Fee',
      category: 'Academic',
      amount: 38500,
      status: 'paid',
      method: 'Online Banking',
      transactionId: 'TXN202402050123',
      receipt: '/receipts/TXN202402050123.pdf'
    },
    {
      id: 'PAY2024002',
      date: '2024-02-01',
      purpose: 'Hostel Fee',
      category: 'Hostel',
      amount: 45000,
      status: 'paid',
      method: 'Debit Card',
      transactionId: 'TXN202402010087',
      receipt: '/receipts/TXN202402010087.pdf'
    },
    {
      id: 'PAY2024003',
      date: '2024-01-28',
      purpose: 'Library Fine',
      category: 'Miscellaneous',
      amount: 150,
      status: 'paid',
      method: 'UPI',
      transactionId: 'TXN202401280045',
      receipt: '/receipts/TXN202401280045.pdf'
    },
    {
      id: 'PAY2024004',
      date: '2024-01-20',
      purpose: 'Lab Fee',
      category: 'Academic',
      amount: 5000,
      status: 'paid',
      method: 'Net Banking',
      transactionId: 'TXN202401200032',
      receipt: '/receipts/TXN202401200032.pdf'
    },
    {
      id: 'PAY2024005',
      date: '2024-01-15',
      purpose: 'Exam Fee',
      category: 'Academic',
      amount: 2000,
      status: 'paid',
      method: 'Cash',
      transactionId: 'TXN202401150019',
      receipt: '/receipts/TXN202401150019.pdf'
    },
    {
      id: 'PAY2024006',
      date: '2024-01-10',
      purpose: 'Sports Fee',
      category: 'Sports',
      amount: 1500,
      status: 'failed',
      method: 'UPI',
      transactionId: 'TXN202401100008',
      receipt: null
    },
    {
      id: 'PAY2024007',
      date: '2024-01-05',
      purpose: 'Mess Advance',
      category: 'Hostel',
      amount: 6000,
      status: 'paid',
      method: 'Online Banking',
      transactionId: 'TXN202401050003',
      receipt: '/receipts/TXN202401050003.pdf'
    },
    {
      id: 'PAY2023008',
      date: '2023-12-20',
      purpose: 'Bus Fee',
      category: 'Transport',
      amount: 8000,
      status: 'paid',
      method: 'Debit Card',
      transactionId: 'TXN202312200098',
      receipt: '/receipts/TXN202312200098.pdf'
    },
    {
      id: 'PAY2023009',
      date: '2023-08-15',
      purpose: 'Semester Fee',
      category: 'Academic',
      amount: 38500,
      status: 'paid',
      method: 'Online Banking',
      transactionId: 'TXN202308150067',
      receipt: '/receipts/TXN202308150067.pdf'
    },
    {
      id: 'PAY2023010',
      date: '2023-08-10',
      purpose: 'Hostel Fee',
      category: 'Hostel',
      amount: 45000,
      status: 'refunded',
      method: 'Net Banking',
      transactionId: 'TXN202308100045',
      receipt: '/receipts/TXN202308100045.pdf'
    }
  ];

  const statusConfig = {
    paid: { label: 'Paid', color: 'text-green-700', bg: 'bg-green-100', icon: '✓' },
    pending: { label: 'Pending', color: 'text-yellow-700', bg: 'bg-yellow-100', icon: '⏳' },
    failed: { label: 'Failed', color: 'text-red-700', bg: 'bg-red-100', icon: '✗' },
    refunded: { label: 'Refunded', color: 'text-blue-700', bg: 'bg-blue-100', icon: '↩' }
  };

  const purposeCategories = ['All', 'Academic', 'Hostel', 'Transport', 'Sports', 'Miscellaneous'];

  // Filtering and sorting logic
  const filteredAndSortedPayments = useMemo(() => {
    let filtered = [...paymentData];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(payment =>
        payment.purpose.toLowerCase().includes(searchTerm.toLowerCase()) ||
        payment.transactionId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        payment.id.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Status filter
    if (filterStatus !== 'all') {
      filtered = filtered.filter(payment => payment.status === filterStatus);
    }

    // Purpose filter
    if (filterPurpose !== 'all') {
      filtered = filtered.filter(payment => payment.category === filterPurpose);
    }

    // Date range filter
    if (dateRange !== 'all') {
      const now = new Date();
      const rangeDate = new Date();
      
      switch(dateRange) {
        case 'week':
          rangeDate.setDate(now.getDate() - 7);
          break;
        case 'month':
          rangeDate.setMonth(now.getMonth() - 1);
          break;
        case 'quarter':
          rangeDate.setMonth(now.getMonth() - 3);
          break;
        case 'year':
          rangeDate.setFullYear(now.getFullYear() - 1);
          break;
      }
      
      filtered = filtered.filter(payment => new Date(payment.date) >= rangeDate);
    }

    // Sorting
    filtered.sort((a, b) => {
      let comparison = 0;
      
      switch(sortBy) {
        case 'date':
          comparison = new Date(a.date) - new Date(b.date);
          break;
        case 'amount':
          comparison = a.amount - b.amount;
          break;
        case 'purpose':
          comparison = a.purpose.localeCompare(b.purpose);
          break;
        case 'status':
          comparison = a.status.localeCompare(b.status);
          break;
      }
      
      return sortOrder === 'asc' ? comparison : -comparison;
    });

    return filtered;
  }, [paymentData, searchTerm, filterStatus, filterPurpose, dateRange, sortBy, sortOrder]);

  // Statistics
  const stats = useMemo(() => {
    const total = filteredAndSortedPayments.reduce((sum, p) => sum + p.amount, 0);
    const paid = filteredAndSortedPayments.filter(p => p.status === 'paid').reduce((sum, p) => sum + p.amount, 0);
    const failed = filteredAndSortedPayments.filter(p => p.status === 'failed').length;
    const refunded = filteredAndSortedPayments.filter(p => p.status === 'refunded').reduce((sum, p) => sum + p.amount, 0);

    return { total, paid, failed, refunded, count: filteredAndSortedPayments.length };
  }, [filteredAndSortedPayments]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('desc');
    }
  };

  const handleDownloadReceipt = (receipt) => {
    if (receipt) {
      alert(`Downloading receipt: ${receipt}`);
      // window.open(receipt, '_blank');
    }
  };

  const handleExportCSV = () => {
    const headers = ['Date', 'Purpose', 'Category', 'Amount', 'Status', 'Method', 'Transaction ID'];
    const rows = filteredAndSortedPayments.map(p => [
      formatDate(p.date),
      p.purpose,
      p.category,
      p.amount,
      p.status,
      p.method,
      p.transactionId
    ]);
    
    const csv = [headers, ...rows].map(row => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `payment-history-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const togglePaymentSelection = (id) => {
    setSelectedPayments(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const SortIcon = ({ column }) => {
    if (sortBy !== column) {
      return <span className="text-gray-400">↕</span>;
    }
    return sortOrder === 'asc' ? <span className="text-primary">↑</span> : <span className="text-primary">↓</span>;
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold text-primary">Payment History</h2>
            <p className="text-sm text-gray-500 mt-1">
              Complete transaction history and receipts
            </p>
          </div>
          <button
            onClick={handleExportCSV}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
          >
            <span>📥</span> Export CSV
          </button>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3 border border-blue-200">
            <p className="text-xs text-blue-600 font-medium">Total Payments</p>
            <p className="text-xl font-bold text-blue-900">{stats.count}</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-3 border border-green-200">
            <p className="text-xs text-green-600 font-medium">Total Paid</p>
            <p className="text-xl font-bold text-green-900">{formatCurrency(stats.paid)}</p>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-3 border border-red-200">
            <p className="text-xs text-red-600 font-medium">Failed</p>
            <p className="text-xl font-bold text-red-900">{stats.failed}</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-3 border border-purple-200">
            <p className="text-xs text-purple-600 font-medium">Refunded</p>
            <p className="text-xl font-bold text-purple-900">{formatCurrency(stats.refunded)}</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="p-6 border-b border-gray-200 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search by purpose, transaction ID, or payment ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
        </div>

        {/* Filter Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Status Filter */}
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
          >
            <option value="all">All Statuses</option>
            <option value="paid">Paid</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
            <option value="refunded">Refunded</option>
          </select>

          {/* Category Filter */}
          <select
            value={filterPurpose}
            onChange={(e) => setFilterPurpose(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
          >
            {purposeCategories.map(cat => (
              <option key={cat} value={cat.toLowerCase()}>
                {cat} {cat !== 'All' && 'Fees'}
              </option>
            ))}
          </select>

          {/* Date Range Filter */}
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
          >
            <option value="all">All Time</option>
            <option value="week">Last 7 Days</option>
            <option value="month">Last Month</option>
            <option value="quarter">Last 3 Months</option>
            <option value="year">Last Year</option>
          </select>

          {/* Sort By */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
          >
            <option value="date">Sort by Date</option>
            <option value="amount">Sort by Amount</option>
            <option value="purpose">Sort by Purpose</option>
            <option value="status">Sort by Status</option>
          </select>
        </div>

        {/* Active Filters Display */}
        {(searchTerm || filterStatus !== 'all' || filterPurpose !== 'all' || dateRange !== 'all') && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-gray-600">Active filters:</span>
            {searchTerm && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                Search: "{searchTerm}"
                <button onClick={() => setSearchTerm('')} className="ml-1 text-red-500">✕</button>
              </span>
            )}
            {filterStatus !== 'all' && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                Status: {filterStatus}
                <button onClick={() => setFilterStatus('all')} className="ml-1 text-red-500">✕</button>
              </span>
            )}
            {filterPurpose !== 'all' && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                Category: {filterPurpose}
                <button onClick={() => setFilterPurpose('all')} className="ml-1 text-red-500">✕</button>
              </span>
            )}
            {dateRange !== 'all' && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                Range: {dateRange}
                <button onClick={() => setDateRange('all')} className="ml-1 text-red-500">✕</button>
              </span>
            )}
          </div>
        )}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        {filteredAndSortedPayments.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-5xl mb-3">💳</div>
            <p className="text-gray-500 font-medium">No payments found</p>
            <p className="text-sm text-gray-400 mt-1">Try adjusting your filters</p>
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-y border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left">
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedPayments(filteredAndSortedPayments.map(p => p.id));
                      } else {
                        setSelectedPayments([]);
                      }
                    }}
                    checked={selectedPayments.length === filteredAndSortedPayments.length}
                    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                </th>
                <th 
                  className="px-4 py-3 text-left font-semibold text-gray-700 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort('date')}
                >
                  <div className="flex items-center gap-2">
                    Date <SortIcon column="date" />
                  </div>
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">
                  Payment ID
                </th>
                <th 
                  className="px-4 py-3 text-left font-semibold text-gray-700 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort('purpose')}
                >
                  <div className="flex items-center gap-2">
                    Purpose <SortIcon column="purpose" />
                  </div>
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">
                  Method
                </th>
                <th 
                  className="px-4 py-3 text-right font-semibold text-gray-700 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort('amount')}
                >
                  <div className="flex items-center justify-end gap-2">
                    Amount <SortIcon column="amount" />
                  </div>
                </th>
                <th 
                  className="px-4 py-3 text-center font-semibold text-gray-700 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort('status')}
                >
                  <div className="flex items-center justify-center gap-2">
                    Status <SortIcon column="status" />
                  </div>
                </th>
                <th className="px-4 py-3 text-center font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredAndSortedPayments.map((payment) => (
                <tr 
                  key={payment.id} 
                  className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                    selectedPayments.includes(payment.id) ? 'bg-blue-50' : ''
                  }`}
                >
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      checked={selectedPayments.includes(payment.id)}
                      onChange={() => togglePaymentSelection(payment.id)}
                      className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                    />
                  </td>
                  <td className="px-4 py-3 text-gray-900">
                    {formatDate(payment.date)}
                  </td>
                  <td className="px-4 py-3">
                    <span className="font-mono text-xs text-gray-600">
                      {payment.id}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div>
                      <p className="font-medium text-gray-900">{payment.purpose}</p>
                      <p className="text-xs text-gray-500">{payment.category}</p>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    {payment.method}
                  </td>
                  <td className="px-4 py-3 text-right font-semibold text-gray-900">
                    {formatCurrency(payment.amount)}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                      statusConfig[payment.status].bg
                    } ${statusConfig[payment.status].color}`}>
                      {statusConfig[payment.status].icon} {statusConfig[payment.status].label}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    {payment.receipt ? (
                      <button
                        onClick={() => handleDownloadReceipt(payment.receipt)}
                        className="text-primary hover:text-primary/80 font-medium text-xs"
                        title="Download Receipt"
                      >
                        📄 Receipt
                      </button>
                    ) : (
                      <span className="text-gray-400 text-xs">N/A</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Footer with bulk actions */}
      {selectedPayments.length > 0 && (
        <div className="p-4 bg-blue-50 border-t border-blue-200">
          <div className="flex items-center justify-between">
            <span className="text-sm text-blue-900 font-medium">
              {selectedPayments.length} payment{selectedPayments.length > 1 ? 's' : ''} selected
            </span>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                Download Selected
              </button>
              <button 
                onClick={() => setSelectedPayments([])}
                className="px-3 py-1.5 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300"
              >
                Clear Selection
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}