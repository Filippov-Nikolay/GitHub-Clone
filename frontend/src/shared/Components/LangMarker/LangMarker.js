import React from 'react';

import './langMarker.css';
import './adaptive.css';

export default function LangMarker({ nameLang }) {
    const colorLang = LANGUAGE_COLORS[nameLang.toLowerCase()] || '#ccc';

    return (
        <div className="lang-marker">
            <div className="lang-marker__color-lang" style={{ backgroundColor: colorLang }}></div>
            <div className="lang-marker__name-lang">{nameLang.charAt(0).toUpperCase() + nameLang.slice(1)}</div>
        </div>
    )
}

const LANGUAGE_COLORS = {
    javascript: '#f1e05a',
    typescript: '#3178c6',
    python: '#3572A5',
    java: '#b07219',
    c: '#555555',
    'c++': '#f34b7d',
    'c#': '#178600',
    php: '#4F5D95',
    ruby: '#701516',
    go: '#00ADD8',
    rust: '#dea584',
    swift: '#ffac45',
    kotlin: '#A97BFF',
    dart: '#00B4AB',
    html: '#e34c26',
    css: '#563d7c',
    scss: '#c6538c',
    less: '#1d365d',
    shell: '#89e051',
    powershell: '#012456',
    bash: '#4EAA25',
    json: '#292929',
    yaml: '#cb171e',
    markdown: '#083fa1',
    sql: '#e38c00',
    r: '#198CE7',
    perl: '#0298c3',
    haskell: '#5e5086',
    lua: '#000080',
    'objective-c': '#438eff',
    scala: '#c22d40',
    elixir: '#6e4a7e',
    coffeescript: '#244776',
    vue: '#41b883',
    svelte: '#ff3e00',
    angular: '#dd1b16',
    react: '#61dafb',
    julia: '#a270ba',
    assembly: '#6E4C13',
    groovy: '#4298b8',
    crystal: '#000100',
    'f#': '#b845fc',
    ocaml: '#3be133',
    erlang: '#B83998',
    nim: '#ffc200',
    fortran: '#4d41b1',
    solidity: '#363636',
    vhdl: '#adb2cb',
    verilog: '#b2b7f8',
    zig: '#ec915c'
};
