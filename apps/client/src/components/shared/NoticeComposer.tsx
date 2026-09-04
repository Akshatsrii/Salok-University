
import { useState } from 'react';
import { Send, Users, Megaphone, Check } from 'lucide-react';

export const NoticeComposer = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [targetScope, setTargetScope] = useState('ALL');
  const [channels, setChannels] = useState({
    sms: false,
    email: true,
    push: true,
    whatsapp: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      setTitle('');
      setContent('');
    }, 1000);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
          <Megaphone className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-gray-900">Compose Notice</h2>
          <p className="text-sm text-gray-500">Draft and broadcast official announcements.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Notice Title</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="E.g., End Semester Exam Schedule"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Target Audience Scope</label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <select
                value={targetScope}
                onChange={(e) => setTargetScope(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none bg-white"
              >
                <option value="ALL">All University Members</option>
                <option value="STUDENTS">All Students</option>
                <option value="FACULTY">All Faculty & Staff</option>
                <option value="SPECIFIC_BRANCH">Specific Branch/Department</option>
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Notice Content</label>
          <textarea
            required
            rows={5}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Type your official announcement here..."
          />
        </div>

        <div className="space-y-3">
          <label className="text-sm font-medium text-gray-700">Delivery Channels</label>
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center gap-2 cursor-pointer p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <input
                type="checkbox"
                checked={channels.email}
                onChange={(e) => setChannels({...channels, email: e.target.checked})}
                className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-700 font-medium">Email</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <input
                type="checkbox"
                checked={channels.push}
                onChange={(e) => setChannels({...channels, push: e.target.checked})}
                className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-700 font-medium">Push App</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <input
                type="checkbox"
                checked={channels.sms}
                onChange={(e) => setChannels({...channels, sms: e.target.checked})}
                className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-700 font-medium">SMS</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <input
                type="checkbox"
                checked={channels.whatsapp}
                onChange={(e) => setChannels({...channels, whatsapp: e.target.checked})}
                className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-700 font-medium">WhatsApp</span>
            </label>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100 flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? (
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : success ? (
              <Check className="w-5 h-5" />
            ) : (
              <Send className="w-5 h-5" />
            )}
            {success ? 'Notice Sent!' : 'Broadcast Notice'}
          </button>
        </div>
      </form>
    </div>
  );
};
