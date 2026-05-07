// ===== Composants partagés (nav + footer) injectés dynamiquement =====
// Cela évite de répéter le HTML dans chaque page.

const NAV = (active) => `
<header class="absolute top-0 left-0 right-0 z-50">
  <nav class="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex items-center justify-between">
    <a href="/index.html" class="flex items-center gap-3">
      <div class="w-10 h-10 border-2 border-white flex items-center justify-center text-white font-serif text-lg italic">L</div>
      <span class="font-serif text-xl text-white tracking-wide">Institut Lumière</span>
    </a>
    <ul class="hidden lg:flex items-center gap-8 text-sm font-medium text-white/90">
      <li><a href="/index.html" class="hover:text-white ${active==='index'?'border-b-2 border-amber-400 pb-1':''}">Accueil</a></li>
      <li class="relative group">
        <button class="hover:text-white flex items-center gap-1 pb-1 ${active==='facultes'?'border-b-2 border-amber-400':''}">
          Facultés
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div class="absolute left-1/2 -translate-x-1/2 mt-3 w-72 bg-white rounded-sm shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
          <a href="/facultes.html#info" class="flex items-center gap-3 px-5 py-3 text-stone-700 hover:bg-stone-50 hover:text-amber-700 text-sm"> Génie Informatique</a>
          <a href="/facultes.html#gestion" class="flex items-center gap-3 px-5 py-3 text-stone-700 hover:bg-stone-50 hover:text-amber-700 text-sm"> Sciences de Gestion</a>
          <a href="/facultes.html#droit" class="flex items-center gap-3 px-5 py-3 text-stone-700 hover:bg-stone-50 hover:text-amber-700 text-sm"> Droit & Sciences Politiques</a>
          <a href="/facultes.html#medecine" class="flex items-center gap-3 px-5 py-3 text-stone-700 hover:bg-stone-50 hover:text-amber-700 text-sm"> Sciences de la Santé</a>
          <a href="/facultes.html#lettres" class="flex items-center gap-3 px-5 py-3 text-stone-700 hover:bg-stone-50 hover:text-amber-700 text-sm"> Lettres & Langues</a>
          <a href="/facultes.html#archi" class="flex items-center gap-3 px-5 py-3 text-stone-700 hover:bg-stone-50 hover:text-amber-700 text-sm"> Architecture & Design</a>
        </div>
      </li>
      <li><a href="/admissions.html" class="hover:text-white ${active==='admissions'?'border-b-2 border-amber-400 pb-1':''}">Admissions</a></li>
      <li><a href="/recherche.html" class="hover:text-white ${active==='recherche'?'border-b-2 border-amber-400 pb-1':''}">Recherche</a></li>
      <li><a href="/hebergement.html" class="hover:text-white ${active==='hebergement'?'border-b-2 border-amber-400 pb-1':''}">Hébergement</a></li>
      <li><a href="/actualites.html" class="hover:text-white ${active==='actualites'?'border-b-2 border-amber-400 pb-1':''}">Actualités</a></li>
    </ul>
    <a href="/admissions.html" class="hidden lg:inline-block bg-amber-500 hover:bg-amber-600 text-stone-900 px-5 py-2.5 text-sm font-semibold tracking-wide transition">CANDIDATER</a>
    <button id="menuBtn" class="lg:hidden text-white p-2"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg></button>
  </nav>
  <div id="mobileMenu" class="hidden lg:hidden bg-stone-900 text-white">
    <a href="/index.html" class="block px-6 py-3 border-t border-stone-700">Accueil</a>
    <a href="/facultes.html" class="block px-6 py-3 border-t border-stone-700">Facultés</a>
    <a href="/admissions.html" class="block px-6 py-3 border-t border-stone-700">Admissions</a>
    <a href="/recherche.html" class="block px-6 py-3 border-t border-stone-700">Recherche</a>
    <a href="/hebergement.html" class="block px-6 py-3 border-t border-stone-700">Hébergement</a>
    <a href="/actualites.html" class="block px-6 py-3 border-t border-stone-700">Actualités</a>
  </div>
</header>`;

const FOOTER = `
<footer class="bg-stone-900 text-stone-300">
  <div class="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-10">
    <div>
      <div class="flex items-center gap-3 mb-4">
        <div class="w-10 h-10 border-2 border-amber-400 flex items-center justify-center text-amber-400 font-serif italic">L</div>
        <span class="font-serif text-xl text-white">Institut Lumière</span>
      </div>
      <p class="text-sm leading-relaxed text-stone-400">Excellence académique, recherche et innovation au service de la société depuis 1985.</p>
    </div>
    <div>
      <h4 class="text-white font-semibold mb-4 text-xs tracking-widest">NAVIGATION</h4>
      <ul class="space-y-2 text-sm"><li><a href="/index.html" class="hover:text-amber-400">Accueil</a></li><li><a href="/facultes.html" class="hover:text-amber-400">Facultés</a></li><li><a href="/admissions.html" class="hover:text-amber-400">Admissions</a></li><li><a href="/recherche.html" class="hover:text-amber-400">Recherche</a></li></ul>
    </div>
    <div>
      <h4 class="text-white font-semibold mb-4 text-xs tracking-widest">VIE ÉTUDIANTE</h4>
      <ul class="space-y-2 text-sm"><li><a href="/hebergement.html" class="hover:text-amber-400">Hébergement</a></li><li><a href="/actualites.html" class="hover:text-amber-400">Actualités</a></li><li><a href="#" class="hover:text-amber-400">Bibliothèque</a></li><li><a href="#" class="hover:text-amber-400">Sport & Culture</a></li></ul>
    </div>
    <div>
      <h4 class="text-white font-semibold mb-4 text-xs tracking-widest">CONTACT</h4>
      <p class="text-sm text-stone-400 leading-relaxed">15, Avenue de l'Université<br/>Cotonou<br/><br/>+229 57 22 00 00 00<br/>contact@institut-lumiere.edu</p>
    </div>
  </div>
  <div class="border-t border-stone-800 py-6 text-center text-xs text-stone-500 tracking-wider">© 2026 INSTITUT LUMIÈRE — TOUS DROITS RÉSERVÉS</div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  const navSlot = document.getElementById('nav-slot');
  const footSlot = document.getElementById('footer-slot');
  if (navSlot) navSlot.innerHTML = NAV(navSlot.dataset.active || '');
  if (footSlot) footSlot.innerHTML = FOOTER;

  const btn = document.getElementById('menuBtn');
  const menu = document.getElementById('mobileMenu');
  if (btn && menu) btn.addEventListener('click', () => menu.classList.toggle('hidden'));
});
