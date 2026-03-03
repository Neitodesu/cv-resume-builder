function ThemeSwitchButton() {
  function swap() {
    window.print()
  }
  return (
    <button onClick={swap} className="theme-switch-btn">Save as PDF</button>
  )
}

export default ThemeSwitchButton
