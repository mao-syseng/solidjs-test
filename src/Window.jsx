
export default function Window({title, children}) {
  return (
    <div class="window">
      <div class="title-bar">
        <div class="title-bar-text">
          {title}
        </div>

        <div class="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div class="window-body">
        {children}
      </div>
    </div>
  )
}
