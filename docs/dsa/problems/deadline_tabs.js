function switchTab(btn, id) {
  const wrap = btn.closest('.code-tabs');
  wrap.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));
  wrap.querySelectorAll('.tab-panel').forEach((p) => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(id).classList.add('active');
}
