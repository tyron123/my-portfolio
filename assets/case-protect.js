
(function(){
  const CONFIG = {
    password: "ty",
    storageKey: "tvaz_case_access",
    protectedSlugs: ["kanban", "gpd"]  // filenames or path segments
  };

  function shouldProtect(path){
    const p = (path || window.location.pathname).toLowerCase();
    return CONFIG.protectedSlugs.some(slug => p.includes(slug));
  }

  function showOverlay(){
    if(localStorage.getItem(CONFIG.storageKey)==="ok") return;
    const overlay = document.createElement('div');
    overlay.className = "fixed inset-0 bg-black/80 z-[200] flex items-center justify-center p-4";
    overlay.innerHTML = `
      <div class="card max-w-sm w-full p-6 bg-white dark:bg-[#111114]">
        <h2 class="text-lg font-medium mb-2">Enter password</h2>
        <p class="text-sm opacity-80 mb-4">Case studies are protected. Enter the password to view.</p>
        <form id="pwForm" class="space-y-3">
          <input id="pwInput" type="password" class="w-full p-3 rounded-lg border" placeholder="Password" aria-label="Password" required />
          <button class="btn btn-primary w-full" type="submit">Unlock</button>
          <p id="pwErr" class="text-sm text-red-600 hidden">Incorrect password, try again.</p>
        </form>
      </div>`;
    document.body.appendChild(overlay);
    const form = overlay.querySelector('#pwForm');
    const input = overlay.querySelector('#pwInput');
    const err = overlay.querySelector('#pwErr');
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      if(input.value === CONFIG.password){ localStorage.setItem(CONFIG.storageKey, "ok"); overlay.remove(); }
      else { err.classList.remove('hidden'); input.value=''; input.focus(); }
    });
    input.focus();
  }

  document.addEventListener('DOMContentLoaded', function(){
    if(shouldProtect(window.location.pathname)) showOverlay();
  });
})();
