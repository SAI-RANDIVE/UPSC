import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store';
import { Target, Lock, AlertCircle } from 'lucide-react';

export default function Login() {
  const [pin, setPin] = useState(['', '', '', '']);
  const [error, setError] = useState('');
  const [shake, setShake] = useState(false);
  const refs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];
  const login = useAuth(s => s.login);
  const isAuthenticated = useAuth(s => s.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate('/dashboard', { replace: true });
  }, [isAuthenticated, navigate]);

  useEffect(() => { refs[0].current?.focus(); }, []);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newPin = [...pin];
    newPin[index] = value.slice(-1);
    setPin(newPin);
    setError('');

    if (value && index < 3) refs[index + 1].current?.focus();

    const full = newPin.join('');
    if (full.length === 4) {
      setTimeout(() => {
        if (login(full)) {
          navigate('/dashboard', { replace: true });
        } else {
          setError('Incorrect PIN. Try again.');
          setShake(true);
          setTimeout(() => { setShake(false); setPin(['', '', '', '']); refs[0].current?.focus(); }, 500);
        }
      }, 150);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !pin[index] && index > 0) {
      refs[index - 1].current?.focus();
    }
  };

  return (
    <div style={{ minHeight: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #0A1F14, #163B24)', padding: 24 }}>
      <div style={{ background: 'white', borderRadius: 24, padding: '48px 40px', width: '100%', maxWidth: 400, textAlign: 'center', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
        <div style={{ width: 56, height: 56, borderRadius: 16, background: 'linear-gradient(135deg, #0F2B1D, #16A34A)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
          <Target size={28} color="white" />
        </div>
        <h1 style={{ fontSize: 24, fontWeight: 800, color: '#111', marginBottom: 8, letterSpacing: '-0.02em' }}>Welcome Back</h1>
        <p style={{ fontSize: 14, color: '#6B7280', marginBottom: 36 }}>Enter your 4-digit PIN to continue</p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 24, animation: shake ? 'shake 0.4s ease' : 'none' }}>
          {pin.map((digit, i) => (
            <input
              key={i}
              ref={refs[i]}
              type="password"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={e => handleChange(i, e.target.value)}
              onKeyDown={e => handleKeyDown(i, e)}
              style={{
                width: 56, height: 64, textAlign: 'center', fontSize: 24, fontWeight: 700,
                border: `2px solid ${error ? '#EF4444' : digit ? '#16A34A' : '#E5E7EB'}`,
                borderRadius: 14, outline: 'none', color: '#111',
                background: digit ? '#F0FDF4' : '#F9FAFB',
                transition: 'all 0.2s ease', fontFamily: 'inherit'
              }}
              onFocus={e => { if (!error) e.target.style.borderColor = '#16A34A'; e.target.style.boxShadow = '0 0 0 3px rgba(22,163,74,0.1)'; }}
              onBlur={e => { if (!digit && !error) e.target.style.borderColor = '#E5E7EB'; e.target.style.boxShadow = 'none'; }}
            />
          ))}
        </div>

        {error && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, color: '#EF4444', fontSize: 13, fontWeight: 500, marginBottom: 16 }}>
            <AlertCircle size={14} /> {error}
          </div>
        )}

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, color: '#9CA3AF', fontSize: 12, marginTop: 24 }}>
          <Lock size={12} /> Secured with local PIN
        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          50% { transform: translateX(8px); }
          75% { transform: translateX(-4px); }
        }
      `}</style>
    </div>
  );
}
