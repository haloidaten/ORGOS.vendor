import React, { useState } from 'react';
import OrgosLogo from './components/OrgosLogo';
import brandLogo from './components/image 83.png';
import Dashboard from './components/Dashboard';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Check, 
  X, 
  ShieldCheck, 
  Clock, 
  Globe, 
  Cpu, 
  Info,
  ExternalLink,
  HelpCircle,
  FileText
} from 'lucide-react';

export default function App() {
  const [email, setEmail] = useState('vendor@gmail.com');
  const [password, setPassword] = useState('••••••••••••'); // Bullet placeholder
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [logoLoaded, setLogoLoaded] = useState(false);
  
  // Custom interactive modal states
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email || !email.includes('@')) {
      setErrorMessage('Please enter valid corporate email coordinates.');
      return;
    }
    if (!password || password.trim().length === 0) {
      setErrorMessage('Access credentials cannot be blank.');
      return;
    }

    setIsAuthenticating(true);

    // Simulate luxury security token verification and handshake
    setTimeout(() => {
      setIsAuthenticating(false);
      setAuthenticatedUser({
        email: email,
        loginTime: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        sessionToken: 'TKN-ORG-' + Math.floor(100000 + Math.random() * 900000),
        ipAddress: '158.3.114.' + Math.floor(10 + Math.random() * 200),
        node: 'US-EAST-INGRESS-3',
        partnerCode: 'VND-ORG-449',
        legalEntity: 'Orgos Couture Studio Ltd.'
      });
    }, 1200);
  };

  const handleSignOut = () => {
    setIsAuthenticating(false);
    setAuthenticatedUser(null);
    setPassword('••••••••••••');
  };

  if (authenticatedUser) {
    return <Dashboard onLogout={handleSignOut} />;
  }

  return (
    <div className="min-h-screen w-full flex flex-col justify-between bg-[#fbfbfa] text-[#1c1a17] font-sans relative overflow-hidden select-none antialiased">
      
      {/* Absolute faint background textile texture grids */}
      <div className="absolute inset-0 pointer-events-none opacity-2 flex flex-col justify-between p-10 z-0">
        <div className="w-full border-t border-[#175c2e]/10 border-dashed"></div>
        <div className="w-full border-t border-[#175c2e]/10 border-dashed"></div>
        <div className="w-full border-t border-[#175c2e]/10 border-dashed"></div>
        <div className="w-full border-t border-[#175c2e]/10 border-dashed"></div>
      </div>

      {/* Decorative vertical thread vectors for high-fashion elegance */}
      <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#175c2e]/0 via-[#175c2e]/5 to-[#175c2e]/0 pointer-events-none"></div>
      <div className="absolute right-[8%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#175c2e]/0 via-[#175c2e]/5 to-[#175c2e]/0 pointer-events-none"></div>

      {/* Top minimal header */}
      <header className="w-full max-w-7xl mx-auto px-6 py-4 flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#175c2e] animate-pulse"></span>
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#175c2e] uppercase">
            ORGOS PRIVATE PORTAL
          </span>
        </div>

        <button 
          onClick={() => setShowHelpModal(true)}
          className="text-neutral-400 hover:text-[#175c2e] p-1.5 rounded-full hover:bg-neutral-100 transition-colors flex items-center gap-1 text-xs font-semibold"
          title="Login Assistance"
        >
          <HelpCircle className="w-4 h-4" />
          <span className="hidden sm:inline">Assistance</span>
        </button>
      </header>

      {/* Central content workspace containing the authentic Card */}
      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 md:p-8 z-10">
        
        {/* Dynamic Card Transition Wrapper */}
        <div className="w-full max-w-[480px] bg-white border border-neutral-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[24px] p-8 sm:p-10 space-y-6 relative transition-all duration-300">
          
          {!authenticatedUser ? (
            /* INITIAL LOGIN VIEW */
            <div className="space-y-6">

              {/* Brand Logo Image from Upload (with graceful fallback block) */}
              <div className="flex justify-center">
                <img 
                  src={brandLogo} 
                  alt="Orgos Logo" 
                  className={`h-24 w-auto object-contain transition-all duration-300 ${logoLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95 h-0 overflow-hidden'}`}
                  referrerPolicy="no-referrer"
                  onLoad={() => setLogoLoaded(true)}
                  onError={() => setLogoLoaded(false)}
                />
              </div>

              {/* Handcrafted precise fallback branding logo */}
              {!logoLoaded && <OrgosLogo className="mx-auto" size="md" />}

              {/* Central Title */}
              <div className="space-y-1 text-center">
                <h2 className="text-2xl font-extrabold text-neutral-900 tracking-tight">
                  Vendor Login
                </h2>
                <p className="text-xs text-neutral-500 font-medium tracking-wide">
                  Sign in to continue to ORGOS vendor panel
                </p>
              </div>

              {/* Status and Error Alerts in-card */}
              {errorMessage && (
                <div className="p-3.5 bg-rose-50 border border-rose-200/60 rounded-xl text-rose-800 text-xs flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 self-center shrink-0"></span>
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Login Action Form */}
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                
                {/* Email container */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-bold text-neutral-800 uppercase tracking-widest text-left">
                    Email
                  </label>
                  <div className="relative flex items-center">
                    <Mail className="absolute left-3.5 w-4.5 h-4.5 text-neutral-400" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errorMessage) setErrorMessage('');
                      }}
                      className="w-full pl-11 pr-4 py-3 border border-neutral-300 rounded-xl text-sm text-neutral-900 bg-white placeholder-neutral-400 focus:ring-1 focus:ring-[#175c2e] focus:border-[#175c2e] outline-none transition-all"
                      placeholder="vendor@gmail.com"
                    />
                  </div>
                </div>

                {/* Password container */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-bold text-neutral-800 uppercase tracking-widest text-left">
                    Password
                  </label>
                  <div className="relative flex items-center">
                    <Lock className="absolute left-3.5 w-4.5 h-4.5 text-neutral-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        if (errorMessage) setErrorMessage('');
                      }}
                      className="w-full pl-11 pr-11 py-3 border border-neutral-300 rounded-xl text-sm text-neutral-900 bg-white placeholder-neutral-400 focus:ring-1 focus:ring-[#175c2e] focus:border-[#175c2e] outline-none transition-all font-mono"
                      placeholder="Password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 focus:outline-none text-neutral-400 hover:text-neutral-700 transition-colors"
                      title={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <EyeOff className="w-4.5 h-4.5" /> : <Eye className="w-4.5 h-4.5" />}
                    </button>
                  </div>
                </div>

                {/* Form parameters: Keep session active & help links */}
                <div className="flex items-center justify-between text-xs pt-1">
                  <label className="flex items-center gap-2 cursor-pointer text-neutral-800 font-semibold tracking-wide select-none">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                      className="rounded border-neutral-300 text-[#175c2e] focus:ring-[#175c2e] w-4.5 h-4.5 accent-[#175c2e] cursor-pointer"
                    />
                    Remember me
                  </label>

                  <button
                    type="button"
                    onClick={() => setShowForgotModal(true)}
                    className="font-bold text-[#175c2e] hover:underline cursor-pointer"
                  >
                    Forgot Password?
                  </button>
                </div>

                {/* Gorgeous Submission Action button */}
                <button
                  type="submit"
                  disabled={isAuthenticating}
                  className="w-full py-3.5 bg-[#175c2e] hover:bg-[#124d25] active:scale-[0.98] disabled:bg-[#175c2e]/60 disabled:cursor-wait transition-all font-sans font-bold text-white text-sm rounded-xl shadow-sm mt-3.5 flex items-center justify-center gap-2"
                >
                  {isAuthenticating ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Deploying Secure Token...
                    </>
                  ) : (
                    'Login'
                  )}
                </button>
              </form>
            </div>
          ) : (
            /* SECURE SESSION CONTAINER (Success Screen on the same view) */
            <div className="space-y-6 animate-fadeIn">
              
              {/* Authenticated Header Badge status */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#175c2e]/10 text-[#175c2e] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#175c2e]/20">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
                  Session Active
                </h3>
                <p className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full px-3 py-1 inline-block mt-1 font-semibold">
                  Authorized Credentials Verified
                </p>
              </div>

              {/* Session specifications list */}
              <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-100 space-y-3.5 text-xs">
                
                <div className="flex justify-between items-center border-b border-neutral-100 pb-2">
                  <span className="text-neutral-400 font-medium">Partner Entity</span>
                  <span className="font-bold text-neutral-800">{authenticatedUser.legalEntity}</span>
                </div>

                <div className="flex justify-between items-center border-b border-neutral-100 pb-2">
                  <span className="text-neutral-400 font-medium">Identifier Code</span>
                  <span className="font-mono bg-neutral-200 text-neutral-700 px-1.5 py-0.5 rounded text-[10px] font-bold">
                    {authenticatedUser.partnerCode}
                  </span>
                </div>

                <div className="flex justify-between items-center border-b border-neutral-100 pb-2">
                  <span className="text-neutral-400 font-medium">Timestamp Init</span>
                  <span className="font-mono text-neutral-800 flex items-center gap-1 font-bold">
                    <Clock className="w-3.5 h-3.5 text-[#175c2e]" />
                    {authenticatedUser.loginTime} (UTC)
                  </span>
                </div>

                <div className="flex justify-between items-center border-b border-neutral-100 pb-2">
                  <span className="text-neutral-400 font-medium">Ingress Node</span>
                  <span className="font-mono text-neutral-800 flex items-center gap-1 font-semibold">
                    <Cpu className="w-3.5 h-3.5 text-neutral-400" />
                    {authenticatedUser.node}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-neutral-400 font-medium">Authorized IP</span>
                  <span className="font-mono text-neutral-800 flex items-center gap-1 font-semibold">
                    <Globe className="w-3.5 h-3.5 text-neutral-400" />
                    {authenticatedUser.ipAddress}
                  </span>
                </div>
              </div>

              {/* Informative message satisfying the "no dashboard" instruction precisely */}
              <div className="p-4 bg-[#fcfbf9] border border-[#175c2e]/10 rounded-2xl text-xs text-neutral-600 leading-relaxed text-center space-y-2">
                <div className="font-bold text-neutral-800 flex items-center gap-1 justify-center">
                  <Info className="w-4 h-4 text-[#175c2e]" />
                  Dashboard Restricted
                </div>
                <p>
                  As explicitly specified by your administration system, other operational pages and secondary statistics cards have been disabled on this build.
                </p>
              </div>

              {/* Unbind Session / Cancel Authorization button */}
              <button
                onClick={handleSignOut}
                className="w-full py-3 bg-neutral-50 hover:bg-[#175c2e]/10 text-[#175c2e] hover:text-[#175c2e] border border-neutral-200 hover:border-[#175c2e]/20 transition-all font-sans font-bold text-xs rounded-xl active:scale-[0.98]"
              >
                End Authorized Session (Sign Out)
              </button>
            </div>
          )}

        </div>
      </main>

      {/* Global simple high-fashion layout footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-6 border-t border-neutral-100 text-center text-[11px] text-neutral-400 font-medium flex flex-col sm:flex-row justify-between items-center gap-2 z-10">
        <div>
          @ 2026 ORGOS Pvt. Ltd. All rights reserved. Registered Partner.
        </div>
        <div className="flex gap-4 font-semibold text-neutral-500">
          <button onClick={() => setShowHelpModal(true)} className="hover:text-[#175c2e] hover:underline">
            Support coordinates
          </button>
          <span>•</span>
          <button onClick={() => setShowHelpModal(true)} className="hover:text-[#175c2e] hover:underline">
            SLA Policies
          </button>
        </div>
      </footer>

      {/* CUSTOM POPUP FORGOT PASSWORD DIALOG */}
      {showForgotModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-neutral-200 rounded-[20px] shadow-xl w-full max-w-md p-6 relative animate-fadeIn">
            <button
              onClick={() => setShowForgotModal(false)}
              className="absolute right-4 top-4 text-neutral-400 hover:text-neutral-600 rounded-full p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-3 text-[#175c2e]">
              <div className="p-2 bg-[#175c2e]/10 rounded-lg">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-bold text-neutral-900 text-lg">Password Assistance</h3>
            </div>

            <div className="space-y-4 text-xs text-neutral-600 leading-normal">
              <p>
                To reset password permissions or request a one-time deployment passcode, please contact ORGOS Support team at:
              </p>
              
              <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-105 font-mono text-center text-sm font-semibold text-neutral-800 selection:bg-emerald-100">
                support@orgos.com
              </div>

              <p className="text-[10px] text-neutral-400">
                Authorized identity verification and legal tax documentation (TX-ORGOS-839218A) may be requested during compliance verification.
              </p>

              <button
                onClick={() => setShowForgotModal(false)}
                className="w-full py-2.5 bg-[#175c2e] text-white rounded-xl text-xs font-bold shadow-sm hover:bg-[#1a5f2e]"
              >
                Acknowledge
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CUSTOM HELP DIALOG */}
      {showHelpModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-neutral-200 rounded-[20px] shadow-xl w-full max-w-md p-6 relative animate-fadeIn">
            <button
              onClick={() => setShowHelpModal(false)}
              className="absolute right-4 top-4 text-neutral-400 hover:text-neutral-600 rounded-full p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-3 text-[#175c2e]">
              <div className="p-2 bg-[#175c2e]/10 rounded-lg">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-bold text-neutral-900 text-lg">Partner SLA Instructions</h3>
            </div>

            <div className="space-y-4 text-xs text-neutral-600 leading-normal">
              <div className="space-y-2">
                <h4 className="font-bold text-neutral-800 uppercase text-[10px] tracking-wider">Default Testing Credentials</h4>
                <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-100 space-y-1">
                  <div>Email: <span className="font-mono font-bold text-neutral-900">vendor@gmail.com</span></div>
                  <div>Password: <span className="font-mono font-bold text-neutral-900">••••••••••••</span> (or any password)</div>
                </div>
              </div>

              <div className="space-y-1">
                <h4 className="font-bold text-neutral-800 uppercase text-[10px] tracking-wider">Integration Rules</h4>
                <p>
                  This portal is exclusively designed for authorized ORGOS textile distributors. All logons are securely monitored in compliance with our standard material routing procedures.
                </p>
              </div>

              <button
                onClick={() => setShowHelpModal(false)}
                className="w-full py-2.5 bg-neutral-100 text-neutral-700 rounded-xl text-xs font-bold hover:bg-neutral-200"
              >
                Acknowledge and Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
