import React from 'react';
import brandLogo from './image 84.png';
import { 
  Search, 
  Bell, 
  ChevronDown, 
  Calendar, 
  ArrowUpRight, 
  TrendingUp, 
  Award, 
  Store, 
  Users, 
  Star, 
  LayoutGrid, 
  FolderIcon, 
  Shirt, 
  ClipboardList, 
  Ticket, 
  CircleDollarSign, 
  Truck, 
  RotateCcw, 
  MessageSquare, 
  MapPin, 
  Settings, 
  LogOut,
  ChevronRight,
  TrendingDown,
  Menu,
  X
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

export default function Dashboard({ onLogout }) {
  const [showLogoutConfirm, setShowLogoutConfirm] = React.useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = React.useState(false);

  // Sales Overview Chart Mock Data to perfectly match the purple peak curve in the image
  // Values representing coordinates on a 100K grid: 6 points of Jan
  const salesData = [
    { name: 'Jan', sales: 12000 },
    { name: 'Jan', sales: 30000 },
    { name: 'Jan', sales: 30000 },
    { name: 'Jan', sales: 48000 },
    { name: 'Jan', sales: 52000 },
    { name: 'Jan', sales: 74000 },
    { name: 'Jan', sales: 58000 },
    { name: 'Jan', sales: 68000 },
    { name: 'Jan', sales: 62000 },
    { name: 'Jan', sales: 95000 },
  ];

  return (
    <div className="min-h-screen w-full flex bg-[#fbfbfb] text-[#1c1a17] font-sans overflow-x-hidden">
      
      {/* Sidebar mobile overlay background */}
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 cursor-pointer" 
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* LEFT SIDEBAR - Forest Green theme exactly matching image */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#033c1c] text-white flex flex-col justify-between shrink-0 shadow-xl border-r border-[#033c1c] transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:z-30 h-full overflow-y-auto ${
        isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Top Header & Logo */}
        <div className="w-full">
          {/* Logo Container */}
          <div className="pt-6 pb-2 px-6 text-center select-none flex flex-col items-center relative">
            {/* Mobile close button */}
            <button 
              onClick={() => setIsMobileSidebarOpen(false)}
              className="absolute right-4 top-4 text-white/70 hover:text-white lg:hidden p-1 rounded-lg hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
            <img 
              src={brandLogo} 
              alt="ORGOS" 
              className="w-48 h-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Under-logo divider */}
          <div className="border-t border-white/10 mx-4 my-2"></div>

          {/* Sidebar Menu items and non-clickable navigation structure with hover effects */}
          <nav className="space-y-[4px] px-3 pt-3 select-none">
            {/* Active or inactive link depending on logout confirmation status */}
            <div className={`flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-sm transition-all duration-200 cursor-pointer ${
              !showLogoutConfirm 
                ? 'bg-[#0a4d26] text-white font-semibold shadow-sm' 
                : 'text-white/70 font-medium hover:bg-white/[0.08] hover:text-white'
            }`}>
              <LayoutGrid className={`w-5 h-5 shrink-0 transition-colors ${!showLogoutConfirm ? 'text-white' : 'text-white/50 group-hover:text-white/90'}`} />
              <span>Dashboard</span>
            </div>

            {/* Inactive links labeled precisely as in image, responsive to hover */}
            <div className="flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-white/70 text-sm font-medium hover:bg-white/[0.08] hover:text-white transition-all duration-200 cursor-pointer group">
              <FolderIcon className="w-5 h-5 shrink-0 text-white/50 group-hover:text-white/90 transition-colors" />
              <span>Categories</span>
            </div>

            <div className="flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-white/70 text-sm font-medium hover:bg-white/[0.08] hover:text-white transition-all duration-200 cursor-pointer group">
              <Shirt className="w-5 h-5 shrink-0 text-white/50 group-hover:text-white/90 transition-colors" />
              <span>Products</span>
            </div>

            <div className="flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-white/70 text-sm font-medium hover:bg-white/[0.08] hover:text-white transition-all duration-200 cursor-pointer group">
              <ClipboardList className="w-5 h-5 shrink-0 text-white/50 group-hover:text-white/90 transition-colors" />
              <span>Orders</span>
            </div>

            <div className="flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-white/70 text-sm font-medium hover:bg-white/[0.08] hover:text-white transition-all duration-200 cursor-pointer group">
              <Ticket className="w-5 h-5 shrink-0 text-white/50 group-hover:text-white/90 transition-colors" />
              <span>Coupons</span>
            </div>

            <div className="flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-white/70 text-sm font-medium hover:bg-white/[0.08] hover:text-white transition-all duration-200 cursor-pointer group">
              <CircleDollarSign className="w-5 h-5 shrink-0 text-white/50 group-hover:text-white/90 transition-colors" />
              <span>Earnings & Payout</span>
            </div>

            <div className="flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-white/70 text-sm font-medium hover:bg-white/[0.08] hover:text-white transition-all duration-200 cursor-pointer group">
              <Truck className="w-5 h-5 shrink-0 text-white/50 group-hover:text-white/90 transition-colors" />
              <span>Delivery Manage</span>
            </div>

            <div className="flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-white/70 text-sm font-medium hover:bg-white/[0.08] hover:text-white transition-all duration-200 cursor-pointer group">
              <RotateCcw className="w-5 h-5 shrink-0 text-white/50 group-hover:text-white/90 transition-colors" />
              <span>Returns</span>
            </div>

            <div className="flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-white/70 text-sm font-medium hover:bg-white/[0.08] hover:text-white transition-all duration-200 cursor-pointer group">
              <MessageSquare className="w-5 h-5 shrink-0 text-white/50 group-hover:text-white/90 transition-colors" />
              <span>Review & Retings</span> {/* spelled exactly as "Review & Retings" in image! */}
            </div>

            <div className="flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-white/70 text-sm font-medium hover:bg-white/[0.08] hover:text-white transition-all duration-200 cursor-pointer group">
              <MapPin className="w-5 h-5 shrink-0 text-white/50 group-hover:text-white/90 transition-colors" />
              <span>HeatMap</span>
            </div>

            <div className="flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-white/70 text-sm font-medium hover:bg-white/[0.08] hover:text-white transition-all duration-200 cursor-pointer group">
              <Settings className="w-5 h-5 shrink-0 text-white/50 group-hover:text-white/90 transition-colors" />
              <span>Settings</span>
            </div>
          </nav>
        </div>

        {/* BOTTOM NAV BUTTON - LOGOUT */}
        <div className="p-4 border-t border-white/10">
          <button 
            onClick={() => setShowLogoutConfirm(true)}
            className={`w-full flex items-center gap-3.5 px-4 py-4 rounded-xl text-sm font-bold transition-all cursor-pointer select-none ${
              showLogoutConfirm 
                ? 'bg-[#0a4d26] text-white shadow-md' 
                : 'text-white/90 hover:bg-white/10'
            }`}
            id="sidebar-logout-button"
          >
            <LogOut className="w-5 h-5 text-white" />
            <span>Logout</span>
          </button>
        </div>

      </aside>

      {/* RIGHT MAIN PANEL */}
      <div className="flex-grow flex flex-col min-w-0 lg:h-screen lg:overflow-y-auto select-none bg-[#f7f8fc] w-full">
        
        {showLogoutConfirm ? (
          /* LOGOUT CONFIRMATION BACKDROP & MODAL (Completely interactive!) */
          <div className="flex-grow flex items-center justify-center bg-[#eaebee] p-6 min-h-full">
            {/* The Dialog Box */}
            <div className="bg-white rounded-[24px] shadow-[0_12px_45px_rgba(0,0,0,0.15)] px-14 py-12 max-w-[480px] w-full text-center space-y-8 border border-neutral-100 flex flex-col items-center justify-center">
              
              {/* Centered Exit Icon Circle */}
              <div className="w-[110px] h-[110px] rounded-full bg-[#f1f3f9] flex items-center justify-center shrink-0">
                <svg 
                  className="w-12 h-12 text-[#135a26]" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="text-[34px] font-[900] text-[#000000] tracking-tight leading-none">
                  Logout
                </h3>
                <p className="text-[#717171] text-[17px] font-semibold leading-relaxed">
                  Are you sure you want to logout?
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-center gap-5 w-full pt-1.5 px-1">
                <button
                  onClick={() => setShowLogoutConfirm(false)}
                  className="flex-1 py-3.5 border border-gray-300 rounded-[8px] text-[16px] font-bold text-[#000000] bg-white hover:bg-neutral-50 transition-all cursor-pointer shadow-sm text-center"
                  id="modal-cancel-button"
                >
                  Cancel
                </button>
                <button
                  onClick={onLogout}
                  className="flex-1 py-3.5 bg-[#175c2e] hover:bg-[#114521] text-white rounded-[8px] text-[16px] font-bold transition-all cursor-pointer shadow-sm text-center"
                  id="modal-logout-button"
                >
                  Logout
                </button>
              </div>

            </div>
          </div>
        ) : (
          /* NORMAL DASHBOARD CONTENT - non-clickable dashboard */
          <div className="pointer-events-none flex flex-col flex-grow">
          
          {/* HEADER BAR */}
          <header className="bg-white border-b border-gray-100 px-4 sm:px-8 py-4 flex items-center justify-between sticky top-0 z-20 gap-4 pointer-events-auto">
            {/* Left Portion: Hamburger + Search */}
            <div className="flex items-center gap-3 flex-grow sm:flex-initial">
              {/* Hamburger Button for mobile */}
              <button 
                onClick={() => setIsMobileSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-150 text-gray-700 cursor-pointer focus:outline-none shrink-0 transition-colors"
                aria-label="Toggle menu"
              >
                <Menu className="w-5 h-5" />
              </button>

              {/* Search Box on Left */}
              <div className="relative w-full max-w-sm flex items-center bg-transparent">
                <Search className="absolute left-3 w-4 h-4 text-gray-400" />
                <input 
                  type="text" 
                  readOnly 
                  placeholder="Search..." 
                  className="w-full pl-9 pr-3 py-1.5 sm:pl-11 sm:pr-4 sm:py-2 border-0 bg-transparent text-xs sm:text-sm text-gray-800 placeholder-gray-400 outline-none"
                />
              </div>
            </div>

            {/* Icons and User profile on Right */}
            <div className="flex items-center gap-3 sm:gap-5 shrink-0">
              {/* Bell/Notification Ring */}
              <div className="relative p-1.5 sm:p-2 rounded-full border border-gray-200 flex items-center justify-center bg-white">
                <Bell className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-gray-700" />
                <span className="absolute top-[3px] right-[3px] sm:top-[4px] sm:right-[4px] w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#f44336] rounded-full"></span>
              </div>

              {/* Profile Info block */}
              <div className="flex items-center gap-2 sm:gap-3 pl-2 sm:pl-3 border-l border-gray-200">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-gray-150 shrink-0">
                  {/* Profile Picture of elegant man in brown jacket */}
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" 
                    alt="Style Hub Nagpur Manager" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="hidden sm:flex flex-col text-left">
                  <span className="text-xs font-bold text-gray-900 leading-tight">Style Hub Nagpur</span>
                </div>
                <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
              </div>
            </div>
          </header>

        {/* CONTAINER CONTENT */}
        <div className="px-4 sm:px-8 pt-6 pb-28 sm:pb-32 space-y-6 bg-[#f7f8fc] flex-grow">
          
          {/* Welcome Area and Calendar slider */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight text-left">
                Welcome, Style Hub Nagpur👋
              </span>
            </div>

            {/* Calendar trigger pill */}
            <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-xs font-bold text-gray-700 self-start sm:self-auto shadow-sm">
              <Calendar className="w-4 h-4 text-[#175c2e]" />
              <span>20 may - 26 may</span>
            </div>
          </div>

          {/* FOUR STAT CARDS ROW */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* 1. Total Sales */}
            <div className="bg-white border border-gray-200/80 rounded-[20px] p-5 shadow-[0_2px_12px_rgb(0,0,0,0.01)] flex justify-between items-start">
              <div className="space-y-2">
                <span className="text-xs font-semibold text-gray-400 block">Total Sales</span>
                <span className="text-[22px] font-extrabold text-gray-900 block font-sans tracking-tight">₹2,48,680</span>
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="text-[#2e7d32] font-bold">↑ 18.6%</span>
                  <span className="text-gray-400 text-[11px] font-semibold">vs last week</span>
                </div>
              </div>
              <div className="w-11 h-11 rounded-full bg-[#f3eefe] flex items-center justify-center text-[#7c3aed]">
                {/* stylized star/percent icon */}
                <div className="w-6 h-6 rounded-lg bg-[#7c3aed]/10 flex items-center justify-center">
                  <span className="text-xs font-black">%</span>
                </div>
              </div>
            </div>

            {/* 2. Total Orders */}
            <div className="bg-white border border-gray-200/80 rounded-[20px] p-5 shadow-[0_2px_12px_rgb(0,0,0,0.01)] flex justify-between items-start">
              <div className="space-y-2">
                <span className="text-xs font-semibold text-gray-400 block">Total Orders</span>
                <span className="text-[22px] font-extrabold text-gray-900 block font-sans tracking-tight">1248</span>
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="text-[#2e7d32] font-bold">↑ 12.7%</span>
                  <span className="text-gray-400 text-[11px] font-semibold">vs last week</span>
                </div>
              </div>
              <div className="w-11 h-11 rounded-full bg-[#e8f5e9] flex items-center justify-center text-[#2e7d32]">
                <Store className="w-5 h-5" />
              </div>
            </div>

            {/* 3. Total Costomer (Spelled exact!) */}
            <div className="bg-white border border-gray-200/80 rounded-[20px] p-5 shadow-[0_2px_12px_rgb(0,0,0,0.01)] flex justify-between items-start">
              <div className="space-y-2">
                <span className="text-xs font-semibold text-gray-400 block">Total Costomer</span>
                <span className="text-[22px] font-extrabold text-gray-900 block font-sans tracking-tight">856</span>
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="text-[#2e7d32] font-bold">↑ 20.5%</span>
                  <span className="text-gray-400 text-[11px] font-semibold">vs last week</span>
                </div>
              </div>
              <div className="w-11 h-11 rounded-full bg-[#fde3cf] flex items-center justify-center text-[#e06d15]">
                <Users className="w-5 h-5" />
              </div>
            </div>

            {/* 4. Store ratings (exact!) */}
            <div className="bg-white border border-gray-200/80 rounded-[20px] p-5 shadow-[0_2px_12px_rgb(0,0,0,0.01)] flex justify-between items-start">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-gray-400 block">Store ratings</span>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span className="text-[22px] font-extrabold text-gray-900 block tracking-tight">4.0</span>
                  {/* Star row */}
                  <div className="flex items-center gap-0.5 self-center pb-1">
                    <span className="text-amber-400 text-sm">★</span>
                    <span className="text-amber-400 text-sm">★</span>
                    <span className="text-amber-400 text-sm">★</span>
                    <span className="text-amber-400 text-sm">★</span>
                    <span className="text-gray-300 text-sm">★</span>
                  </div>
                </div>
                <span className="text-gray-400 text-[10px] font-bold block pt-1">(128 review)</span>
              </div>
              <div className="w-11 h-11 rounded-full bg-[#e3f2fd] flex items-center justify-center text-[#1565c0]">
                {/* trophie icon / star */}
                <div className="w-6 h-6 rounded-lg bg-[#1565c0]/10 flex items-center justify-center">
                  <span className="text-[10px] font-black">⭐</span>
                </div>
              </div>
            </div>

          </div>

          {/* ROW 2: SALES OVERVIEW + RECENT ORDERS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Sales Overview Container */}
            <div className="bg-white border border-gray-200/80 rounded-[24px] p-6 shadow-[0_2px_12px_rgb(0,0,0,0.01)] lg:col-span-7 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-base font-extrabold text-gray-900 tracking-tight">Sales Overview</h4>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-150 rounded-lg text-[11px] font-bold text-gray-600">
                  <span>This Month</span>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                </div>
              </div>

              {/* Exact Line Plot matching the peak line in image */}
              <div className="h-64 w-full select-none">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart 
                    data={salesData} 
                    margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="purpleGlow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.15}/>
                        <stop offset="95%" stopColor="#7c3aed" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f2f6" />
                    <XAxis 
                      dataKey="name" 
                      tick={{ fill: '#9ca3af', fontSize: 11, fontWeight: '500' }} 
                      axisLine={false}
                      tickLine={false}
                      dy={10}
                    />
                    <YAxis 
                      tick={{ fill: '#9ca3af', fontSize: 11, fontWeight: '500' }} 
                      axisLine={false}
                      tickLine={false}
                      dx={-5}
                      domain={[0, 100000]}
                      ticks={[0, 20000, 40000, 60000, 80000, 100000]}
                      tickFormatter={(v) => v === 0 ? '0' : `${v / 1000}K`}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="sales" 
                      stroke="#7c3aed" 
                      strokeWidth={2.5}
                      fillOpacity={1} 
                      fill="url(#purpleGlow)" 
                      dot={{ r: 3, fill: '#7c3aed', strokeWidth: 0 }}
                      activeDot={{ r: 5 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Orders List */}
            <div className="bg-white border border-gray-200/80 rounded-[24px] p-6 shadow-[0_2px_12px_rgb(0,0,0,0.01)] lg:col-span-5 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-base font-extrabold text-[#1c1a17] tracking-tight">Recent Orders</h4>
                <span className="text-xs font-bold text-[#7c3aed]">View All</span>
              </div>

              {/* List of 5 items exactly matching labels */}
              <div className="space-y-3">
                {[
                  { user: "Riya Sharma", role: "Customer", date: "12, May 2025", badge: "Delivered", color: "bg-emerald-50 text-emerald-700 font-semibold" },
                  { user: "Riya Sharma", role: "Vendor", date: "11, May 2025", badge: "Shipped", color: "bg-blue-50 text-blue-700 font-semibold" },
                  { user: "Riya Sharma", role: "Customer", date: "11, May 2025", badge: "Pending", color: "bg-amber-50 text-amber-700 font-semibold" },
                  { user: "Riya Sharma", role: "Vendor", date: "11, May 2025", badge: "Delivered", color: "bg-emerald-50 text-emerald-700 font-semibold" },
                  { user: "Riya Sharma", role: "Customer", date: "10, May 2025", badge: "Cancelled", color: "bg-rose-50 text-[#f44336] font-semibold" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0 last:pb-0 gap-2 flex-wrap sm:flex-nowrap">
                    
                    {/* User left info */}
                    <div className="flex items-center gap-2.5 min-w-[120px]">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-neutral-200 border border-neutral-300 flex items-center justify-center text-neutral-500 text-xs font-extrabold shrink-0">
                        {/* silhouette circle user mask */}
                        <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <div className="text-left">
                        <span className="text-xs font-extrabold text-gray-900 block leading-tight">{item.user}</span>
                      </div>
                    </div>

                    {/* Role */}
                    <span className="text-[11px] sm:text-xs font-medium text-gray-400">{item.role}</span>
                    
                    {/* Date */}
                    <span className="text-[11px] sm:text-xs font-medium text-gray-400">{item.date}</span>

                    {/* Status Badge */}
                    <span className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-[6px] text-[9px] sm:text-[10px] tracking-wide text-center uppercase shrink-0 ${item.color}`}>
                      {item.badge}
                    </span>

                  </div>
                ))}
              </div>

            </div>

          </div>

          {/* ROW 3: EARNING OVERVIEW + TOP SELLING PRODUCTS + LOW STOCK ALERTS */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            
            {/* 1. Earning Overview */}
            <div className="bg-white border border-gray-200/80 rounded-[24px] p-5 shadow-[0_2px_12px_rgb(0,0,0,0.01)] flex flex-col justify-between">
              <h4 className="text-sm font-extrabold text-gray-900 tracking-tight text-left mb-3">Earning Overview</h4>
              
              {/* Pie Donut visualizer container side-by-side with legend */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-2">
                {/* SVG Semi Donut/Pie exactly matching center layout */}
                <div className="relative w-[120px] h-[120px] sm:w-[130px] sm:h-[130px] flex-shrink-0 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    {/* Dark Green / Background arc */}
                    <circle cx="50" cy="50" r="38" stroke="#1b4332" strokeWidth="11" fill="transparent" strokeDasharray="238.7" strokeDashoffset="0" />
                    {/* Core Product Sale arc in emerald bright green */}
                    <circle cx="50" cy="50" r="38" stroke="#2e7d32" strokeWidth="12" fill="transparent" strokeDasharray="238.7" strokeDashoffset="75" />
                    {/* Light slate grey segment */}
                    <circle cx="50" cy="50" r="38" stroke="#90a4ae" strokeWidth="11" fill="transparent" strokeDasharray="238.7" strokeDashoffset="210" />
                  </svg>
                  {/* Inside Center Text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-[12px] sm:text-[13px] font-extrabold text-gray-900 leading-none">₹2,48,680</span>
                  </div>
                </div>

                {/* Legend stack */}
                <div className="space-y-2 text-left shrink-0 w-full sm:w-auto flex flex-col items-center sm:items-start">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#2e7d32] shrink-0"></span>
                    <span className="text-[9px] sm:text-[10px] font-bold text-gray-500 whitespace-nowrap">Product Sale</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#1b4332] shrink-0"></span>
                    <span className="text-[9px] sm:text-[10px] font-bold text-gray-500 whitespace-nowrap">Delivery Charges</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#90a4ae] shrink-0"></span>
                    <span className="text-[9px] sm:text-[10px] font-bold text-gray-500 whitespace-nowrap">Other Earnings</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Top Selling Products */}
            <div className="bg-white border border-gray-200/80 rounded-[24px] p-5 shadow-[0_2px_12px_rgb(0,0,0,0.01)] flex flex-col justify-between">
              <h4 className="text-sm font-extrabold text-gray-900 tracking-tight text-left mb-3">Top Selling Products</h4>
              
              <div className="space-y-2.5">
                {[
                  { name: "Men's Denim Jacket", cat: "Men", img: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=70&auto=format&fit=crop" },
                  { name: "Women's Kurti", cat: "Women", img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=70&auto=format&fit=crop" },
                  { name: "Cotton Shirt", cat: "Men", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=70&auto=format&fit=crop" },
                  { name: "Saree", cat: "Women", img: "https://images.unsplash.com/photo-1610030469618-959139e10860?q=80&w=70&auto=format&fit=crop" },
                  { name: "Kids T- Shirt", cat: "Kids", img: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=70&auto=format&fit=crop" }
                ].map((p, idx) => (
                  <div key={idx} className="flex items-center justify-between py-1 border-b border-gray-50 last:border-0 last:pb-0">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0 border border-neutral-100 bg-neutral-50 flex items-center justify-center">
                        <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="text-left">
                        <span className="text-xs font-bold text-gray-900 block leading-tight">{p.name}</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase bg-gray-50 px-2 py-0.5 rounded-md border border-gray-100">{p.cat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Low Stock Alerts */}
            <div className="bg-white border border-gray-200/80 rounded-[24px] p-5 shadow-[0_2px_12px_rgb(0,0,0,0.01)] flex flex-col justify-between md:col-span-2 xl:col-span-1">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-extrabold text-[#1c1a17] tracking-tight">Low Stock Alerts</h4>
                <span className="text-[11px] font-bold text-[#7c3aed]">View All</span>
              </div>

              <div className="space-y-2.5">
                {[
                  { name: "Men's Denim Jacket", count: 5 },
                  { name: "Women's Kurti", count: 8 },
                  { name: "Cotton Shirt", count: 10 },
                  { name: "Kids T-Shirt", count: 6 },
                  { name: "Leather Wallet", count: 9 },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between py-1 border-b border-gray-50 last:border-0 last:pb-0">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-neutral-200 border border-neutral-300 flex items-center justify-center text-neutral-500 text-xs font-extrabold">
                        <Users className="w-4.5 h-4.5" />
                      </div>
                      <div className="text-left">
                        <span className="text-xs font-bold text-gray-900 block leading-tight">{item.name}</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#f44336] whitespace-nowrap bg-rose-50 border border-rose-100 px-2 py-0.5 rounded-[6px]">
                      Stock: {item.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Closing wrap of pointer-events-none layout block */}
        </div>
        )}

      </div>

    </div>
  );
}
