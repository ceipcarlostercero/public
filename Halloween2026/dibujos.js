// Ilustraciones SVG (viewBox 200x200). Usan los filtros/gradientes definidos en index.html
const fondoNoche = '<rect width="200" height="200" fill="url(#noche)"/>';
const arboles = '<path d="M0 200V160L8 150 6 130 14 140 18 120 22 145 30 135 28 160 40 170 60 165 80 175 120 170 150 178 170 160 178 140 184 150 190 128 194 148 200 140V200Z" fill="#05060a"/>';
const espectro = (id, manto, aura, ojos) => `<svg viewBox="0 0 200 200">${fondoNoche}
  <defs><linearGradient id="m${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${aura}" stop-opacity=".55"/><stop offset=".35" stop-color="${manto}"/><stop offset="1" stop-color="#030304"/></linearGradient>
  <radialGradient id="c${id}" cx="50%" cy="40%" r="60%"><stop offset="0" stop-color="#f4fbf8"/><stop offset=".7" stop-color="#b9c6c0"/><stop offset="1" stop-color="#5d6a66"/></radialGradient></defs>
  <ellipse cx="100" cy="105" rx="80" ry="85" fill="${aura}" opacity=".45" filter="url(#borroso)"/>
  <path d="M100 18C58 18 42 62 44 108 46 150 30 178 18 196L34 186 48 198 62 186 78 198 92 186 108 198 122 186 138 198 152 186 166 198 182 196C170 178 154 150 156 108 158 62 142 18 100 18Z" fill="url(#m${id})" stroke="${aura}" stroke-opacity=".5" stroke-width="1.5" filter="url(#humo)"/>
  <path d="M100 40C76 40 66 72 68 104 70 136 86 152 100 152 114 152 130 136 132 104 134 72 124 40 100 40Z" fill="#050505"/>
  <path d="M100 60C84 60 78 80 79 102 80 128 90 142 100 142 110 142 120 128 121 102 122 80 116 60 100 60Z" fill="url(#c${id})"/>
  <g class="ojos" filter="url(#brillo)"><path d="M84 88Q90 78 96 90 92 104 84 98Z" fill="${ojos}"/><path d="M116 88Q110 78 104 90 108 104 116 98Z" fill="${ojos}"/></g>
  <path d="M100 108C92 108 90 122 92 134 94 142 106 142 108 134 110 122 108 108 100 108Z" fill="#000"/>
  <path d="M97 100L100 94 103 100Z" fill="#555"/>
  <path d="M84 70Q80 84 82 96M118 72Q122 86 118 98" stroke="#7c8985" stroke-width="1.2" fill="none" opacity=".7"/>
  <g fill="none" stroke="#c8d2cc" stroke-width="5" stroke-linecap="round"><path d="M46 168Q40 150 26 132"/><path d="M48 166Q38 146 36 120"/><path d="M52 164Q50 142 54 116"/><path d="M56 166Q64 148 72 132"/></g>
  <path d="M26 132L20 126M36 120L34 112M54 116L56 108M72 132L78 128" stroke="#e8f0ec" stroke-width="3" stroke-linecap="round"/>
  <ellipse cx="52" cy="172" rx="12" ry="9" fill="#c8d2cc"/></svg>`;

const dibujos = {
  puerta: `<svg viewBox="0 0 200 200">${fondoNoche}
    <g fill="#3a2f2a" stroke="#1a1410" stroke-width="2">${[0,1,2,3,4,5,6].map(f=>[0,1,2,3,4].map(c=>`<rect x="${c*44-(f%2)*22}" y="${f*30}" width="44" height="30"/>`).join('')).join('')}</g>
    <path d="M40 200V92A60 60 0 0 1 160 92V200Z" fill="#4a3d36" stroke="#120d0a" stroke-width="4"/>
    <path d="M52 200V96A48 48 0 0 1 148 96V200Z" fill="#000"/>
    <path d="M122 200L200 200 148 120 122 110Z" fill="url(#luz)" opacity=".7"/>
    <path d="M52 200V96A48 48 0 0 1 120 52V200Z" fill="#4b2a14" stroke="#1d0e05" stroke-width="3"/>
    <path d="M68 66V200M86 54V200M104 50V200" stroke="#2a1608" stroke-width="3"/>
    <rect x="52" y="90" width="68" height="8" fill="#1d1d1d"/><rect x="52" y="160" width="68" height="8" fill="#1d1d1d"/>
    <circle cx="110" cy="130" r="6" fill="none" stroke="#999" stroke-width="3"/>
    <g class="ojos" filter="url(#brillo)" fill="#ff2a00"><ellipse cx="130" cy="106" rx="4" ry="2.5"/><ellipse cx="141" cy="106" rx="4" ry="2.5"/></g>
    <path d="M118 52Q125 30 140 60" stroke="#ccc" stroke-width=".8" fill="none" opacity=".6"/></svg>`,

  timbre: `<svg viewBox="0 0 200 200">${fondoNoche}
    <circle cx="150" cy="45" r="30" fill="#b3261e" filter="url(#brillo)"/>
    <path d="M20 200V120H60V90H140V120H180V200Z" fill="#0d0f16"/>
    <g fill="#ffb84a" opacity=".8"><rect x="32" y="140" width="10" height="14"/><rect x="158" y="140" width="10" height="14"/><rect x="70" y="105" width="8" height="12"/></g>
    <path d="M40 70L100 22 160 70Z" fill="#2a2a33" stroke="#000" stroke-width="3"/>
    <rect x="52" y="68" width="10" height="70" fill="#3a2a1e"/><rect x="138" y="68" width="10" height="70" fill="#3a2a1e"/>
    <path d="M100 66C80 66 76 90 74 110 72 124 64 128 64 132H136C136 128 128 124 126 110 124 90 120 66 100 66Z" fill="#b8862b" stroke="#5a3c0c" stroke-width="3"/>
    <path d="M86 78Q82 100 80 122" stroke="#f3d27a" stroke-width="4" fill="none" opacity=".7"/>
    <circle cx="100" cy="138" r="7" fill="#5a3c0c"/>
    <rect x="66" y="150" width="68" height="20" rx="3" fill="#4a3a2a" stroke="#1d150c" stroke-width="2"/>
    <text x="100" y="165" text-anchor="middle" font-family="Rubik Dirt, cursive" font-size="13" fill="#e9d8b4">COLEGIO</text>
    <g fill="#000"><path d="M30 40Q36 34 42 40 46 34 50 40 44 38 40 46 36 38 30 40Z"/><path d="M110 30Q115 25 120 30 123 25 127 30 122 28 118 35 115 28 110 30Z"/></g>
    <path d="M50 75Q60 90 55 100M150 75Q140 92 146 104" stroke="#c00" stroke-width="2" fill="none" opacity=".7"/></svg>`,

  viento: `<svg viewBox="0 0 200 200">${fondoNoche}${arboles}
    <g filter="url(#humo)" fill="#bfe3ff" opacity=".85">
      <path d="M150 70C150 40 120 30 100 40 70 55 60 90 30 100 60 102 40 120 10 130 50 135 70 120 90 130 120 145 155 120 150 70Z"/>
    </g>
    <g fill="none" stroke="#e6f4ff" stroke-width="3" opacity=".6" filter="url(#humo)"><path d="M10 60Q60 40 90 70"/><path d="M0 150Q60 160 110 140"/><path d="M40 175Q100 185 160 150"/></g>
    <g fill="#05070d"><path d="M100 70Q108 58 118 70 112 80 100 70Z"/><path d="M128 66Q136 56 144 68 138 76 128 66Z"/><path d="M104 96Q120 84 136 98 132 118 118 120 104 114 104 96Z"/></g>
    <g fill="#a0522d"><path d="M160 150l8-6 2 8z"/><path d="M40 60l6-5 2 7z"/><path d="M175 110l7-3-1 7z"/></g></svg>`,

  rayos: `<svg viewBox="0 0 200 200"><rect width="200" height="200" fill="#0a0618"/>
    <ellipse cx="100" cy="40" rx="120" ry="45" fill="#2b1a55" filter="url(#borroso)"/>
    <ellipse cx="110" cy="100" rx="60" ry="90" fill="#7a3cff" opacity=".35" filter="url(#borroso)"/>
    <g filter="url(#brillo)"><path d="M120 0L92 70 112 72 78 140 102 140 84 200 140 110 116 108 148 50 124 50 140 0Z" fill="#e9dcff"/>
    <path d="M92 70L60 90 70 110M78 140L50 160M116 108L160 130 170 160" stroke="#c9b3ff" stroke-width="3" fill="none"/></g>
    <path d="M0 200V170L10 150 20 172 30 140 40 172 52 155 60 175 75 150 85 178 120 180 135 158 145 176 160 145 172 172 185 150 200 170V200Z" fill="#000"/></svg>`,

  voz1: espectro('v1', '#1f3b33', '#35e05a', '#7dff8a'),
  voz2: espectro('v2', '#33402a', '#c8d21a', '#fff36a'),
  voz3: espectro('v3', '#2c1f45', '#a43cff', '#ff2020'),

  melodia: `<svg viewBox="0 0 200 200"><rect width="200" height="200" fill="#0e0204"/>
    <g filter="url(#borroso)"><circle cx="100" cy="90" r="62" fill="#9a0614"/><circle cx="60" cy="150" r="40" fill="#5a0010"/><circle cx="150" cy="150" r="36" fill="#5a0010"/></g>
    <g filter="url(#humo)" fill="none" stroke="#ff3a3a" stroke-width="2" opacity=".45"><path d="M10 190Q50 130 30 80T60 10"/><path d="M190 190Q150 130 170 80T140 10"/></g>
    <g filter="url(#brillo)">
      <path d="M78 52L150 36V58L78 74Z" fill="#ff4d4d"/>
      <path d="M81 58V132M147 42V116" stroke="#ff4d4d" stroke-width="6" fill="none"/>
      <ellipse cx="66" cy="134" rx="17" ry="12" transform="rotate(-22 66 134)" fill="#ff4d4d"/>
      <ellipse cx="132" cy="118" rx="17" ry="12" transform="rotate(-22 132 118)" fill="#ff4d4d"/>
    </g>
    <path d="M0 200V178H40V166Q50 154 60 166V178H140V162Q152 148 164 162V178H200V200Z" fill="#000"/>
    <g fill="#d8d0c0"><path d="M88 176C88 164 112 164 112 176 112 184 108 186 108 190H92C92 186 88 184 88 176Z"/></g>
    <g fill="#0e0204"><circle cx="95" cy="176" r="4"/><circle cx="105" cy="176" r="4"/></g></svg>`,

  pasos: `<svg viewBox="0 0 200 200">${fondoNoche}<g fill="#8a0a0a" filter="url(#brillo)">
    ${[[60,160,-10],[110,120,10],[70,80,-10],[120,40,10]].map(([x,y,r])=>`<g transform="translate(${x} ${y}) rotate(${r})"><ellipse rx="12" ry="20"/><ellipse cy="-28" rx="10" ry="6"/><circle cx="-10" cy="-38" r="4"/><circle cx="-3" cy="-42" r="4"/><circle cx="5" cy="-42" r="3.5"/><circle cx="11" cy="-38" r="3"/></g>`).join('')}</g></svg>`,

  risa: `<svg viewBox="0 0 200 200"><rect width="200" height="200" fill="#120006"/>
    <circle cx="100" cy="100" r="70" fill="#ff1a3a" opacity=".3" filter="url(#borroso)"/>
    <g class="ojos" filter="url(#brillo)" fill="#ff2a2a"><path d="M40 70Q70 50 90 80 70 88 40 70Z"/><path d="M160 70Q130 50 110 80 130 88 160 70Z"/></g>
    <path d="M30 110Q100 190 170 110 100 140 30 110Z" fill="#000" stroke="#ff2a2a" stroke-width="3" filter="url(#brillo)"/>
    <g fill="#f0e8d8">${[50,66,82,98,114,130,146].map(x=>`<path d="M${x} ${118+Math.abs(x-98)*-.12+8}l7 14 7-14z"/>`).join('')}</g></svg>`,

  fondo: `<svg viewBox="0 0 200 200">${fondoNoche}
    <circle cx="100" cy="70" r="50" fill="#ffae3c" opacity=".35" filter="url(#borroso)"/>
    <path d="M100 40Q86 64 100 84 114 64 100 40Z" fill="#ffd27a" filter="url(#brillo)"/>
    <rect x="84" y="86" width="32" height="90" fill="#e8e0cc"/>
    <path d="M84 86Q90 110 88 130M116 86Q112 100 114 116" stroke="#cfc6ae" stroke-width="5" fill="none"/>
    <ellipse cx="100" cy="180" rx="40" ry="10" fill="#3a2a1e"/></svg>`,
};
