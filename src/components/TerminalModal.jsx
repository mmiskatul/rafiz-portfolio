'use client';

import { useState, useRef, useEffect } from 'react';
import { X, Terminal as TerminalIcon, Play, RotateCcw, ShieldCheck, FileText, CheckCircle } from 'lucide-react';

export default function TerminalModal({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    { type: 'system', text: 'Dargibari Tailor Management System v2.4 (POSIX Bash)' },
    { type: 'system', text: 'Kernel: Linux 6.8.0-generic x86_64 | Hashing: SHA-256' },
    { type: 'system', text: 'Type "help" or click one of the quick command buttons below.' },
  ]);
  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (rawCmd) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'input', text: rawCmd }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `AVAILABLE COMMANDS:
  auth            - Authenticate tailor master user via SHA-256 checksum
  measurements    - Display client measurement ledger parsed with awk & grep
  invoice         - Generate automated billing statement with bc math processor
  cat database.csv- Dump raw CSV database records
  system-info     - Show POSIX tools and environment architecture
  clear           - Clear terminal buffer
  exit            - Close interactive terminal`,
        });
        break;

      case 'auth':
        newHistory.push({
          type: 'output',
          text: `[SYSTEM AUTHENTICATION]
Prompt: Master Key verification...
Hash: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855 (SHA-256)
Result: [OK] Tailor Shop Admin authenticated successfully.
Access Level: ROOT / INVENTORY_WRITE`,
        });
        break;

      case 'measurements':
        newHistory.push({
          type: 'output',
          text: `[PARSING measurements.csv via awk -F',' '{printf "%-6s | %-14s | Chest:%s | Waist:%s\\n", $1, $2, $3, $4}']
---------------------------------------------------------------
ID     | CLIENT NAME    | CHEST (in) | WAIST (in) | COLLAR (in)
---------------------------------------------------------------
#0101  | Tanvir Hasan   | 39.5       | 33.0       | 15.5
#0102  | Zubair Rahman  | 42.0       | 36.0       | 16.5
#0103  | Abrar Ahmed    | 38.0       | 31.5       | 15.0
#0104  | Moshfiq Rafi   | 40.0       | 32.5       | 15.5
---------------------------------------------------------------
4 records found in local flat-file storage.`,
        });
        break;

      case 'invoice':
      case 'invoice --id 104':
        newHistory.push({
          type: 'output',
          text: `========================================================
             DARGIBARI BESPOKE TAILORS - INVOICE
========================================================
Invoice No: INV-2026-0891       Date: 2026-10-03
Client: Moshfiq Ahmed Rafi      Order: Custom 3-Piece Suit
--------------------------------------------------------
Item                        Qty     Rate (BDT)     Total
1. Italian Wool Blazer        1      14,500.00   14,500.00
2. Bespoke Formal Trouser     1       3,800.00    3,800.00
3. Egyptian Cotton Shirt      1       2,200.00    2,200.00
--------------------------------------------------------
Subtotal:                                       20,500.00
VAT (5% calculated via bc):                      1,025.00
--------------------------------------------------------
TOTAL PAYABLE:                                  21,525.00 BDT
Payment Status: PAID [SHA256 Tx: 8f4a...29b1]
========================================================`,
        });
        break;

      case 'cat database.csv':
        newHistory.push({
          type: 'output',
          text: `order_id,customer_name,phone,garment_type,price,status,sha256_hash
101,Tanvir Hasan,+8801711000001,Blazer,12000,Delivered,9f83...
102,Zubair Rahman,+8801811000002,Sherwani,18000,In_Stitching,e241...
103,Abrar Ahmed,+8801911000003,Panjabi,4500,Ready,a819...
104,Moshfiq Rafi,+8801999223360,Suit_3pc,21525,Completed,8f4a...`,
        });
        break;

      case 'system-info':
        newHistory.push({
          type: 'output',
          text: `Dargibari Shell System Design:
- Shell: GNU Bash 5.2+ (POSIX compliant)
- Record Engine: Standard Linux toolchain (awk, grep, sed, sort, uniq)
- Precision Arithmetic: bc (Arbitrary precision calculator)
- Security: GNU Coreutils sha256sum checksum validation
- Developed by: Moshfiq Ahmed Rafi (DIU Software Engineering)`,
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
        onClose();
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `bash: command not found: "${rawCmd}". Type "help" for a list of valid commands.`,
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    }
  };

  const quickCommands = [
    { label: 'help', cmd: 'help' },
    { label: 'auth (SHA-256)', cmd: 'auth' },
    { label: 'measurements (awk)', cmd: 'measurements' },
    { label: 'invoice (bc calculation)', cmd: 'invoice' },
    { label: 'cat database.csv', cmd: 'cat database.csv' },
    { label: 'system-info', cmd: 'system-info' },
  ];

  return (
    <div
      id="terminal-modal-backdrop"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'rgba(3, 6, 16, 0.88)',
        backdropFilter: 'blur(14px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
      }}
      onClick={onClose}
    >
      <div
        id="terminal-window"
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '820px',
          height: '560px',
          background: '#070b1a',
          border: '1px solid rgba(96, 165, 250, 0.35)',
          borderRadius: '1rem',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 50px -12px rgba(37, 99, 235, 0.3)',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Titlebar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.75rem 1rem',
            background: 'rgba(12, 19, 44, 0.95)',
            borderBottom: '1px solid rgba(96, 165, 250, 0.15)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }} />
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
            <span
              style={{
                marginLeft: '0.75rem',
                fontSize: '0.8125rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.375rem',
              }}
            >
              <TerminalIcon size={14} color="#60a5fa" />
              dargibari@posix-bash: ~/tailor-system
            </span>
          </div>

          <button
            onClick={onClose}
            id="terminal-close-btn"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Quick Command Pills */}
        <div
          style={{
            padding: '0.625rem 1rem',
            background: 'rgba(9, 14, 32, 0.92)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            overflowX: 'auto',
          }}
        >
          <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', whiteSpace: 'nowrap' }}>
            Quick Execute:
          </span>
          {quickCommands.map((qc) => (
            <button
              key={qc.cmd}
              onClick={() => handleCommand(qc.cmd)}
              style={{
                background: 'rgba(37, 99, 235, 0.15)',
                border: '1px solid rgba(96, 165, 250, 0.3)',
                color: '#93c5fd',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                padding: '0.2rem 0.6rem',
                borderRadius: '0.375rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(37, 99, 235, 0.3)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(37, 99, 235, 0.15)')}
            >
              $ {qc.label}
            </button>
          ))}
          <button
            onClick={() => setHistory([])}
            style={{
              background: 'rgba(239, 68, 68, 0.12)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              color: '#f87171',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              padding: '0.2rem 0.6rem',
              borderRadius: '0.375rem',
              cursor: 'pointer',
              marginLeft: 'auto',
            }}
          >
            clear
          </button>
        </div>

        {/* Terminal Body */}
        <div
          id="terminal-output-container"
          style={{
            flex: 1,
            padding: '1rem',
            overflowY: 'auto',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.875rem',
            color: '#e2e8f0',
            lineHeight: 1.55,
          }}
        >
          {history.map((line, idx) => (
            <div key={idx} style={{ marginBottom: '0.625rem', whiteSpace: 'pre-wrap' }}>
              {line.type === 'system' && (
                <div style={{ color: '#94a3b8' }}>{line.text}</div>
              )}
              {line.type === 'input' && (
                <div style={{ display: 'flex', gap: '0.5rem', color: '#c084fc' }}>
                  <span style={{ color: '#60a5fa' }}>rafi@dargibari-linux:~$</span>
                  <span>{line.text}</span>
                </div>
              )}
              {line.type === 'output' && (
                <div style={{ color: '#93c5fd' }}>{line.text}</div>
              )}
              {line.type === 'error' && (
                <div style={{ color: '#f87171' }}>{line.text}</div>
              )}
            </div>
          ))}

          {/* Current Input Line */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
            <span style={{ color: '#60a5fa', whiteSpace: 'nowrap' }}>rafi@dargibari-linux:~$</span>
            <input
              type="text"
              id="terminal-cli-input"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              placeholder="Type command here..."
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#ffffff',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.875rem',
                flex: 1,
              }}
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}
