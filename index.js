// --- ASET SVG BIDAK CATUR ---
const PIECE_SVGS = {
  wK: `<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22.5 11.63V6M20 8h5" stroke-linejoin="miter"/><path d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5" fill="#fff" stroke-linecap="butt" stroke-linejoin="miter"/><path d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z" fill="#fff"/><path d="M11.5 30c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0"/></g></svg>`,
  wQ: `<svg viewBox="0 0 45 45"><g fill="#fff" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zm16.5-4.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM41 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM16 8.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM33 9a2 2 0 1 1-4 0 2 2 0 1 1 4 0z"/><path d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15-5.5-14V25L7 14l2 12z" stroke-linecap="butt"/><path d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z" stroke-linecap="butt"/><path d="M11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0" fill="none"/></g></svg>`,
  wR: `<svg viewBox="0 0 45 45"><g fill="#fff" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 39h27v-3H9v3zm3-3v-4h21v4H12zm-1-22V9h4v2h5V9h5v2h5V9h4v5" stroke-linecap="butt"/><path d="M34 14l-3 3H14l-3-3"/><path d="M31 17v12.5H14V17" stroke-linecap="butt" stroke-linejoin="miter"/><path d="M31 29.5l1.5 2.5h-20l1.5-2.5"/><path d="M11 14h23" fill="none" stroke-linejoin="miter"/></g></svg>`,
  wB: `<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><g fill="#fff" stroke-linecap="butt"><path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.35.49-2.32.47-3-.5 1.35-1.46 3-2 3-2z"/><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z"/></g><path d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5" stroke-linejoin="miter"/></g></svg>`,
  wN: `<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18" fill="#fff"/><path d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10" fill="#fff"/><path d="M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z" fill="#000"/><path d="M 15 15.5 A 0.5 1.5 0 1 1 14,15.5 A 0.5 1.5 0 1 1 15 15.5 z" transform="matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)" fill="#000"/></g></svg>`,
  wP: `<svg viewBox="0 0 45 45"><path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="#fff" stroke="#000" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  bK: `<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22.5 11.63V6M20 8h5" stroke-linejoin="miter"/><path d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5" fill="#1e293b" stroke-linecap="butt" stroke-linejoin="miter"/><path d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z" fill="#1e293b"/><path d="M32 29.5s8.5-4 6.03-9.65C34.15 14 25 18 22.5 24.5l.01 2.1-.01-2.1C20 18 9.906 14 6.997 19.85c-2.497 5.65 4.853 9 4.853 9M11.5 30c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0" stroke="#fff"/></g></svg>`,
  bQ: `<svg viewBox="0 0 45 45"><g fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><g fill="#1e293b" stroke="none"><circle cx="6" cy="12" r="2.75"/><circle cx="14" cy="9" r="2.75"/><circle cx="22.5" cy="8" r="2.75"/><circle cx="31" cy="9" r="2.75"/><circle cx="39" cy="12" r="2.75"/></g><path d="M9 26c8.5-1.5 21-1.5 27 0l2.5-12.5L31 25l-.3-14.1-5.2 13.6-3-14.5-3 14.5-5.2-13.6L14 25 6.5 13.5 9 26z" fill="#1e293b" stroke-linecap="butt"/><path d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z" fill="#1e293b" stroke-linecap="butt"/><path d="M11 38.5a35 35 1 0 0 23 0" fill="none" stroke-linecap="butt"/><path d="M11 29a35 35 1 0 1 23 0M12.5 31.5h20M11.5 34.5a35 35 1 0 0 22 0M10.5 37.5a35 35 1 0 0 24 0" fill="none" stroke="#fff"/></g></svg>`,
  bR: `<svg viewBox="0 0 45 45"><g fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 39h27v-3H9v3zm3.5-7l1.5-2.5h17l1.5 2.5h-20zm-.5 4v-4h21v4H12z" fill="#1e293b" stroke-linecap="butt"/><path d="M14 29.5v-13h17v13H14z" fill="#1e293b" stroke-linecap="butt" stroke-linejoin="miter"/><path d="M14 16.5L11 14h23l-3 2.5H14zM11 14V9h4v2h5V9h5v2h5V9h4v5H11z" fill="#1e293b" stroke-linecap="butt"/><path d="M12 35.5h21M13 31.5h19M14 29.5h17M14 16.5h17M11 14h23" fill="none" stroke="#fff" stroke-width="1" stroke-linejoin="miter"/></g></svg>`,
  bB: `<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><g fill="#1e293b" stroke-linecap="butt"><path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.35.49-2.32.47-3-.5 1.35-1.46 3-2 3-2z"/><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z"/></g><path d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5" stroke="#fff" stroke-linejoin="miter"/></g></svg>`,
  bN: `<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18" fill="#1e293b"/><path d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10" fill="#1e293b"/><path d="M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z" fill="#fff" stroke="#fff"/><path d="M 15 15.5 A 0.5 1.5 0 1 1 14,15.5 A 0.5 1.5 0 1 1 15 15.5 z" transform="matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)" fill="#fff" stroke="#fff"/><path d="M 24.55,10.4 L 24.1,11.85 L 24.6,12 C 27.75,13 30.25,14.49 32.5,18.75 C 34.75,23.01 35.75,29.06 35.25,39 L 35.2,39.5 L 37.45,39.5 L 37.5,39 C 38,28.94 36.62,22.15 34.25,17.66 C 31.88,13.17 28.46,11.02 25.06,10.5 L 24.55,10.4 z" fill="#fff" stroke="none"/></g></svg>`,
  bP: `<svg viewBox="0 0 45 45"><path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="#1e293b" stroke="#000" stroke-width="1.5" stroke-linecap="round"/></svg>`
};

const PIECE_VALUES = { P: 100, N: 320, B: 330, R: 500, Q: 900, K: 20000 };
const PIECE_SYMBOLS = { P: '♟', N: '♞', B: '♝', R: '♜', Q: '♛' };

// --- EFEK SUARA SINTETIS (WEB AUDIO API) ---
class SoundManager {
  constructor() {
    this.enabled = true;
    this.ctx = null;
  }

  play(type) {
    if (!this.enabled) return;
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.ctx.destination);

    const now = this.ctx.currentTime;
    if (type === 'move') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(240, now);
      osc.frequency.exponentialRampToValueAtTime(120, now + 0.08);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === 'capture') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.exponentialRampToValueAtTime(60, now + 0.14);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.14);
      osc.start(now);
      osc.stop(now + 0.14);
    } else if (type === 'check') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.setValueAtTime(440, now + 0.1);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.22);
      osc.start(now);
      osc.stop(now + 0.22);
    }
  }
}

// --- MESIN CATUR & STATUS PERMAINAN ---
class ChessGame {
  constructor() {
    this.sound = new SoundManager();
    this.flipped = false;
    this.mode = 'ai';
    this.difficulty = 2;
    this.initDOM();
    this.resetGame();
  }

  initDOM() {
    this.boardEl = document.getElementById('chessboard');
    this.statusEl = document.getElementById('gameStatus');
    this.historyEl = document.getElementById('moveHistory');
    this.promoModal = document.getElementById('promotionModal');
    this.promoOptions = document.getElementById('promotionOptions');
    this.gameOverModal = document.getElementById('gameOverModal');

    document.getElementById('newGameBtn').onclick = () => this.resetGame();
    document.getElementById('playAgainBtn').onclick = () => {
      this.gameOverModal.classList.add('hidden');
      this.resetGame();
    };
    document.getElementById('undoBtn').onclick = () => this.undoMove();
    document.getElementById('flipBtn').onclick = () => {
      this.flipped = !this.flipped;
      this.render();
    };
    document.getElementById('hintBtn').onclick = () => this.showHint();

    document.getElementById('modeSelect').onchange = (e) => {
      this.mode = e.target.value;
      document.getElementById('difficultySelect').style.display = this.mode === 'ai' ? 'inline-block' : 'none';
      this.resetGame();
    };
    document.getElementById('difficultySelect').onchange = (e) => {
      this.difficulty = parseInt(e.target.value, 10);
    };
    document.getElementById('themeSelect').onchange = (e) => {
      this.boardEl.className = `chessboard theme-${e.target.value}`;
    };
    document.getElementById('soundToggleBtn').onclick = (e) => {
      this.sound.enabled = !this.sound.enabled;
      e.target.textContent = this.sound.enabled ? '🔊' : '🔇';
    };
  }

  resetGame() {
    this.board = [
      ['bR', 'bN', 'bB', 'bQ', 'bK', 'bB', 'bN', 'bR'],
      ['bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP'],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      ['wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP'],
      ['wR', 'wN', 'wB', 'wQ', 'wK', 'wB', 'wN', 'wR']
    ];
    this.turn = 'w';
    this.castling = { wK: true, wQ: true, bK: true, bQ: true };
    this.enPassant = null;
    this.selected = null;
    this.validMoves = [];
    this.lastMove = null;
    this.hintMove = null;
    this.history = [];
    this.stateSnapshots = [];
    this.gameOver = false;
    this.pendingPromotion = null;

    this.gameOverModal.classList.add('hidden');
    this.promoModal.classList.add('hidden');
    this.render();
  }

  // --- LOGIKA VALIDASI LANGKAH ---
  getPseudoMoves(board, r, c, castling, enPassant) {
    const piece = board[r][c];
    if (!piece) return [];
    const color = piece[0];
    const type = piece[1];
    const moves = [];

    const addMove = (tr, tc, special = null) => {
      if (tr < 0 || tr > 7 || tc < 0 || tc > 7) return false;
      const target = board[tr][tc];
      if (!target) {
        moves.push({ from: [r, c], to: [tr, tc], special });
        return true;
      } else if (target[0] !== color) {
        moves.push({ from: [r, c], to: [tr, tc], special });
        return false;
      }
      return false;
    };

    if (type === 'P') {
      const dir = color === 'w' ? -1 : 1;
      const startRow = color === 'w' ? 6 : 1;
      const promoRow = color === 'w' ? 0 : 7;

      // Maju 1 langkah
      if (!board[r + dir]?.[c]) {
        const sp = (r + dir === promoRow) ? 'promotion' : null;
        moves.push({ from: [r, c], to: [r + dir, c], special: sp });
        // Maju 2 langkah
        if (r === startRow && !board[r + dir * 2]?.[c]) {
          moves.push({ from: [r, c], to: [r + dir * 2, c], special: 'double' });
        }
      }
      // Makan diagonal & En Passant
      for (const dc of [-1, 1]) {
        const tr = r + dir, tc = c + dc;
        if (tc >= 0 && tc <= 7 && tr >= 0 && tr <= 7) {
          const target = board[tr][tc];
          if (target && target[0] !== color) {
            const sp = (tr === promoRow) ? 'promotion' : null;
            moves.push({ from: [r, c], to: [tr, tc], special: sp });
          } else if (enPassant && enPassant[0] === tr && enPassant[1] === tc) {
            moves.push({ from: [r, c], to: [tr, tc], special: 'enpassant' });
          }
        }
      }
    } else if (type === 'N') {
      const jumps = [[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];
      jumps.forEach(([dr, dc]) => addMove(r + dr, c + dc));
    } else if (type === 'B' || type === 'R' || type === 'Q') {
      const dirs = [];
      if (type === 'B' || type === 'Q') dirs.push([-1,-1],[-1,1],[1,-1],[1,1]);
      if (type === 'R' || type === 'Q') dirs.push([-1,0],[1,0],[0,-1],[0,1]);
      dirs.forEach(([dr, dc]) => {
        let tr = r + dr, tc = c + dc;
        while (addMove(tr, tc)) { tr += dr; tc += dc; }
      });
    } else if (type === 'K') {
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          if (dr !== 0 || dc !== 0) addMove(r + dr, c + dc);
        }
      }
      // Rokade
      const row = color === 'w' ? 7 : 0;
      if (r === row && c === 4) {
        if (castling[color + 'K'] && !board[row][5] && !board[row][6]) {
          moves.push({ from: [r, c], to: [row, 6], special: 'castleK' });
        }
        if (castling[color + 'Q'] && !board[row][3] && !board[row][2] && !board[row][1]) {
          moves.push({ from: [r, c], to: [row, 2], special: 'castleQ' });
        }
      }
    }
    return moves;
  }

  isSquareAttacked(board, tr, tc, byColor) {
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const p = board[r][c];
        if (p && p[0] === byColor) {
          if (p[1] === 'P') {
            const dir = byColor === 'w' ? -1 : 1;
            if (r + dir === tr && (c - 1 === tc || c + 1 === tc)) return true;
          } else {
            const pseudo = this.getPseudoMoves(board, r, c, { wK:false, wQ:false, bK:false, bQ:false }, null);
            if (pseudo.some(m => m.to[0] === tr && m.to[1] === tc)) return true;
          }
        }
      }
    }
    return false;
  }

  isInCheck(board, color) {
    let kr = -1, kc = -1;
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        if (board[r][c] === color + 'K') { kr = r; kc = c; break; }
      }
    }
    return this.isSquareAttacked(board, kr, kc, color === 'w' ? 'b' : 'w');
  }

  applyMoveToState(state, move) {
    const board = state.board.map(row => [...row]);
    const castling = { ...state.castling };
    const [fr, fc] = move.from;
    const [tr, tc] = move.to;
    const piece = board[fr][fc];
    const color = piece[0];

    board[tr][tc] = move.promo ? color + move.promo : piece;
    board[fr][fc] = null;

    if (move.special === 'enpassant') {
      board[fr][tc] = null;
    } else if (move.special === 'castleK') {
      board[fr][5] = board[fr][7];
      board[fr][7] = null;
    } else if (move.special === 'castleQ') {
      board[fr][3] = board[fr][0];
      board[fr][0] = null;
    }

    // Update hak rokade
    if (piece === 'wK') { castling.wK = false; castling.wQ = false; }
    if (piece === 'bK') { castling.bK = false; castling.bQ = false; }
    if (fr === 7 && fc === 0 || tr === 7 && tc === 0) castling.wQ = false;
    if (fr === 7 && fc === 7 || tr === 7 && tc === 7) castling.wK = false;
    if (fr === 0 && fc === 0 || tr === 0 && tc === 0) castling.bQ = false;
    if (fr === 0 && fc === 7 || tr === 0 && tc === 7) castling.bK = false;

    const enPassant = move.special === 'double' ? [(fr + tr) / 2, fc] : null;
    return { board, castling, enPassant };
  }

  getLegalMoves(state, color) {
    const legal = [];
    const opp = color === 'w' ? 'b' : 'w';
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        if (state.board[r][c]?.[0] === color) {
          const pseudo = this.getPseudoMoves(state.board, r, c, state.castling, state.enPassant);
          for (const m of pseudo) {
            // Validasi khusus rokade tidak boleh melewati skak
            if (m.special === 'castleK' || m.special === 'castleQ') {
              if (this.isInCheck(state.board, color)) continue;
              const midCol = m.special === 'castleK' ? 5 : 3;
              if (this.isSquareAttacked(state.board, r, midCol, opp)) continue;
            }
            const nextState = this.applyMoveToState(state, m);
            if (!this.isInCheck(nextState.board, color)) {
              legal.push(m);
            }
          }
        }
      }
    }
    return legal;
  }

  // --- EKSEKUSI LANGKAH PEMAIN ---
  handleSquareClick(r, c) {
    if (this.gameOver || this.pendingPromotion) return;
    if (this.mode === 'ai' && this.turn === 'b') return;

    const clickedMove = this.validMoves.find(m => m.to[0] === r && m.to[1] === c);
    if (clickedMove) {
      if (clickedMove.special === 'promotion') {
        this.openPromotionModal(clickedMove);
      } else {
        this.executeMove(clickedMove);
      }
      return;
    }

    const piece = this.board[r][c];
    if (piece && piece[0] === this.turn) {
      this.selected = [r, c];
      const allLegal = this.getLegalMoves(this, this.turn);
      this.validMoves = allLegal.filter(m => m.from[0] === r && m.from[1] === c);
    } else {
      this.selected = null;
      this.validMoves = [];
    }
    this.render();
  }

  openPromotionModal(move) {
    this.pendingPromotion = move;
    this.promoOptions.innerHTML = '';
    ['Q', 'R', 'B', 'N'].forEach(type => {
      const btn = document.createElement('button');
      btn.className = 'promo-btn';
      btn.innerHTML = PIECE_SVGS[this.turn + type];
      btn.onclick = () => {
        this.promoModal.classList.add('hidden');
        this.pendingPromotion = null;
        this.executeMove({ ...move, promo: type });
      };
      this.promoOptions.appendChild(btn);
    });
    this.promoModal.classList.remove('hidden');
  }

  executeMove(move) {
    // Simpan snapshot untuk Undo
    this.stateSnapshots.push({
      board: this.board.map(r => [...r]),
      turn: this.turn,
      castling: { ...this.castling },
      enPassant: this.enPassant,
      lastMove: this.lastMove,
      history: [...this.history]
    });

    const captured = this.board[move.to[0]][move.to[1]] || (move.special === 'enpassant' ? 'P' : null);
    const notation = this.buildNotation(move, !!captured);

    const next = this.applyMoveToState(this, move);
    this.board = next.board;
    this.castling = next.castling;
    this.enPassant = next.enPassant;
    this.lastMove = move;
    this.selected = null;
    this.validMoves = [];
    this.hintMove = null;
    this.turn = this.turn === 'w' ? 'b' : 'w';

    const inCheck = this.isInCheck(this.board, this.turn);
    const legalNext = this.getLegalMoves(this, this.turn);

    let suffix = '';
    if (legalNext.length === 0 && inCheck) suffix = '#';
    else if (inCheck) suffix = '+';

    this.history.push(notation + suffix);

    if (inCheck) this.sound.play('check');
    else if (captured) this.sound.play('capture');
    else this.sound.play('move');

    this.render();
    this.checkEndCondition(legalNext, inCheck);

    if (!this.gameOver && this.mode === 'ai' && this.turn === 'b') {
      setTimeout(() => this.makeAIMove(), 250);
    }
  }

  buildNotation(move, isCapture) {
    if (move.special === 'castleK') return 'O-O';
    if (move.special === 'castleQ') return 'O-O-O';
    const piece = this.board[move.from[0]][move.from[1]][1];
    const files = 'abcdefgh';
    const fromFile = files[move.from[1]];
    const dest = files[move.to[1]] + (8 - move.to[0]);
    const promo = move.promo ? '=' + move.promo : '';
    if (piece === 'P') {
      return (isCapture ? fromFile + 'x' : '') + dest + promo;
    }
    return piece + (isCapture ? 'x' : '') + dest + promo;
  }

  checkEndCondition(legalMoves, inCheck) {
    if (legalMoves.length === 0) {
      this.gameOver = true;
      const titleEl = document.getElementById('gameOverTitle');
      const msgEl = document.getElementById('gameOverMessage');
      if (inCheck) {
        const winner = this.turn === 'w' ? 'Hitam' : 'Putih';
        titleEl.textContent = 'Skakmat!';
        msgEl.textContent = `${winner} memenangkan pertandingan.`;
        this.statusEl.textContent = `Skakmat — ${winner} Menang`;
      } else {
        titleEl.textContent = 'Remis (Pat)!';
        msgEl.textContent = 'Tidak ada langkah legal tersisa.';
        this.statusEl.textContent = 'Permainan Seri (Remis)';
      }
      this.gameOverModal.classList.remove('hidden');
    }
  }

  undoMove() {
    if (this.stateSnapshots.length === 0 || this.pendingPromotion) return;
    const steps = (this.mode === 'ai' && this.turn === 'w' && this.stateSnapshots.length >= 2) ? 2 : 1;
    let snap;
    for (let i = 0; i < steps; i++) snap = this.stateSnapshots.pop();
    if (snap) {
      this.board = snap.board;
      this.turn = snap.turn;
      this.castling = snap.castling;
      this.enPassant = snap.enPassant;
      this.lastMove = snap.lastMove;
      this.history = snap.history;
      this.selected = null;
      this.validMoves = [];
      this.hintMove = null;
      this.gameOver = false;
      this.render();
    }
  }

  // --- KECERDASAN BUATAN (MINIMAX + ALPHA-BETA PRUNING) ---
  evaluateBoard(board) {
    let score = 0;
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const p = board[r][c];
        if (!p) continue;
        const val = PIECE_VALUES[p[1]];
        // Bonus kontrol tengah papan
        const centerBonus = (3.5 - Math.abs(3.5 - r)) + (3.5 - Math.abs(3.5 - c));
        score += (p[0] === 'w' ? 1 : -1) * (val + centerBonus * 4);
      }
    }
    return score;
  }

  minimax(state, depth, alpha, beta, isMaximizing) {
    const color = isMaximizing ? 'w' : 'b';
    const moves = this.getLegalMoves(state, color);

    if (depth === 0 || moves.length === 0) {
      if (moves.length === 0) {
        if (this.isInCheck(state.board, color)) {
          return isMaximizing ? -99999 - depth : 99999 + depth;
        }
        return 0;
      }
      return this.evaluateBoard(state.board);
    }

    if (isMaximizing) {
      let maxEval = -Infinity;
      for (const m of moves) {
        const nextMove = m.special === 'promotion' ? { ...m, promo: 'Q' } : m;
        const ev = this.minimax(this.applyMoveToState(state, nextMove), depth - 1, alpha, beta, false);
        maxEval = Math.max(maxEval, ev);
        alpha = Math.max(alpha, ev);
        if (beta <= alpha) break;
      }
      return maxEval;
    } else {
      let minEval = Infinity;
      for (const m of moves) {
        const nextMove = m.special === 'promotion' ? { ...m, promo: 'Q' } : m;
        const ev = this.minimax(this.applyMoveToState(state, nextMove), depth - 1, alpha, beta, true);
        minEval = Math.min(minEval, ev);
        beta = Math.min(beta, ev);
        if (beta <= alpha) break;
      }
      return minEval;
    }
  }

  getBestMove(color, depth) {
    const moves = this.getLegalMoves(this, color);
    if (moves.length === 0) return null;

    // Acak urutan sedikit agar permainan AI bervariasi
    moves.sort(() => Math.random() - 0.5);

    let bestMove = moves[0];
    let bestVal = color === 'w' ? -Infinity : Infinity;

    for (const m of moves) {
      const candidate = m.special === 'promotion' ? { ...m, promo: 'Q' } : m;
      const nextState = this.applyMoveToState(this, candidate);
      const val = this.minimax(nextState, depth - 1, -Infinity, Infinity, color === 'b');
      if (color === 'w' && val > bestVal) {
        bestVal = val;
        bestMove = candidate;
      } else if (color === 'b' && val < bestVal) {
        bestVal = val;
        bestMove = candidate;
      }
    }
    return bestMove;
  }

  makeAIMove() {
    const best = this.getBestMove('b', this.difficulty);
    if (best) this.executeMove(best);
  }

  showHint() {
    if (this.gameOver) return;
    const best = this.getBestMove(this.turn, 2);
    if (best) {
      this.hintMove = best;
      this.render();
    }
  }

  // --- RENDER ANTARMUKA ---
  updateMaterialUI() {
    const initial = { P: 8, N: 2, B: 2, R: 2, Q: 1 };
    const count = { w: { P:0,N:0,B:0,R:0,Q:0 }, b: { P:0,N:0,B:0,R:0,Q:0 } };
    let wScore = 0, bScore = 0;

    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const p = this.board[r][c];
        if (p && p[1] !== 'K') {
          count[p[0]][p[1]]++;
          if (p[0] === 'w') wScore += PIECE_VALUES[p[1]];
          else bScore += PIECE_VALUES[p[1]];
        }
      }
    }

    const renderCaptured = (missingFromColor) => {
      let html = '';
      for (const type of ['Q', 'R', 'B', 'N', 'P']) {
        const diff = initial[type] - count[missingFromColor][type];
        for (let i = 0; i < diff; i++) html += PIECE_SYMBOLS[type];
      }
      return html;
    };

    const topColor = this.flipped ? 'w' : 'b';
    const botColor = this.flipped ? 'b' : 'w';

    document.getElementById('topPlayerName').textContent =
      topColor === 'b' ? (this.mode === 'ai' ? 'Komputer (Hitam)' : 'Pemain 2 (Hitam)') : 'Pemain 1 (Putih)';
    document.getElementById('bottomPlayerName').textContent =
      botColor === 'w' ? (this.mode === 'ai' ? 'Anda (Putih)' : 'Pemain 1 (Putih)') : 'Pemain 2 (Hitam)';

    document.getElementById('topCaptured').textContent = renderCaptured(botColor);
    document.getElementById('bottomCaptured').textContent = renderCaptured(topColor);

    const diff = Math.round((wScore - bScore) / 100);
    document.getElementById('topAdvantage').textContent =
      (topColor === 'w' && diff > 0) ? `+${diff}` : (topColor === 'b' && diff < 0) ? `+${Math.abs(diff)}` : '';
    document.getElementById('bottomAdvantage').textContent =
      (botColor === 'w' && diff > 0) ? `+${diff}` : (botColor === 'b' && diff < 0) ? `+${Math.abs(diff)}` : '';

    document.getElementById('topPlayerBar').classList.toggle('active-turn', this.turn === topColor);
    document.getElementById('bottomPlayerBar').classList.toggle('active-turn', this.turn === botColor);
  }

  render() {
    this.boardEl.innerHTML = '';
    const files = 'abcdefgh';
    const inCheck = this.isInCheck(this.board, this.turn);

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const r = this.flipped ? 7 - i : i;
        const c = this.flipped ? 7 - j : j;
        const sq = document.createElement('div');
        sq.className = `square ${(r + c) % 2 === 0 ? 'light' : 'dark'}`;

        if (this.selected && this.selected[0] === r && this.selected[1] === c) {
          sq.classList.add('selected');
        }
        if (this.lastMove && ((this.lastMove.from[0] === r && this.lastMove.from[1] === c) ||
            (this.lastMove.to[0] === r && this.lastMove.to[1] === c))) {
          sq.classList.add('last-move');
        }
        if (this.hintMove && ((this.hintMove.from[0] === r && this.hintMove.from[1] === c) ||
            (this.hintMove.to[0] === r && this.hintMove.to[1] === c))) {
          sq.classList.add('hint-move');
        }

        const valid = this.validMoves.find(m => m.to[0] === r && m.to[1] === c);
        if (valid) {
          sq.classList.add(this.board[r][c] || valid.special === 'enpassant' ? 'valid-capture' : 'valid-move');
        }

        const piece = this.board[r][c];
        if (piece === this.turn + 'K' && inCheck) {
          sq.classList.add('in-check');
        }

        if (j === 0) {
          const rankLabel = document.createElement('span');
          rankLabel.className = 'coord-rank';
          rankLabel.textContent = 8 - r;
          sq.appendChild(rankLabel);
        }
        if (i === 7) {
          const fileLabel = document.createElement('span');
          fileLabel.className = 'coord-file';
          fileLabel.textContent = files[c];
          sq.appendChild(fileLabel);
        }

        if (piece) {
          const pieceEl = document.createElement('div');
          pieceEl.className = 'piece';
          pieceEl.innerHTML = PIECE_SVGS[piece];
          sq.appendChild(pieceEl);
        }

        sq.onclick = () => this.handleSquareClick(r, c);
        this.boardEl.appendChild(sq);
      }
    }

    if (!this.gameOver) {
      const turnText = this.turn === 'w' ? 'Giliran Putih' : 'Giliran Hitam';
      this.statusEl.textContent = inCheck ? `${turnText} (SKAK!)` : turnText;
    }

    this.updateMaterialUI();

    // Render Riwayat Langkah
    this.historyEl.innerHTML = '';
    for (let i = 0; i < this.history.length; i += 2) {
      const row = document.createElement('div');
      row.className = 'history-row';
      row.innerHTML = `
        <span class="move-num">${i / 2 + 1}.</span>
        <span>${this.history[i]}</span>
        <span>${this.history[i + 1] || ''}</span>
      `;
      this.historyEl.appendChild(row);
    }
    this.historyEl.scrollTop = this.historyEl.scrollHeight;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new ChessGame();
});
