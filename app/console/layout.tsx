


export default function ApplicationLayout({
    children
}:{
    children: React.ReactNode
}){
    return (
    <>
        {/* height: 100vh */}
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside className="flex w-64 flex-col border-r bg-white">
                
                {/* Header */}
                <header className="p-2">
                    Company Name
                </header>

                {/* Scrollable content */}
                <div className="min-h-0 flex-1 overflow-y-auto">

                    {/* Platform group */}
                    <section className="p-2">
                        <h2 className="h-8 px-2 text-xs font-medium text-gray-500">
                            Platform
                        </h2>

                        <ul className="flex flex-col gap-1">
                            <li>
                                <details className="group/menu"></details>
                            </li>
                        </ul>
                    </section>

                </div>
            </aside>
        </div>
       {children} 
    </> 
    )
}


/*

! TODO:

    <div class="group/sidebar flex h-screen">
  <!-- Sidebar -->
  <aside class="flex w-64 flex-col border-r bg-white">

    <!-- Header -->
    <header class="p-2">
      <!-- Company selector -->
    </header>

    <!-- Scrollable content -->
    <div class="min-h-0 flex-1 overflow-y-auto">

      <!-- Platform group -->
      <section class="p-2">
        <h2 class="h-8 px-2 text-xs font-medium text-gray-500">
          Platform
        </h2>

        <ul class="flex flex-col gap-1">
          <li>
            <details open class="group/menu">
              <summary class="flex h-8 cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-gray-100">
                Playground
                <span class="ml-auto transition-transform group-open/menu:rotate-90">
                  ›
                </span>
              </summary>

              <ul class="ml-5 border-l pl-3">
                <li><a href="#" class="block p-2 text-sm">History</a></li>
                <li><a href="#" class="block p-2 text-sm">Starred</a></li>
                <li><a href="#" class="block p-2 text-sm">Settings</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </section>

      <!-- Projects group -->
      <section class="p-2">
        <h2 class="h-8 px-2 text-xs font-medium text-gray-500">
          Projects
        </h2>
        <ul class="flex flex-col gap-1">
          <li>
            <a href="#" class="flex items-center gap-2 rounded-md p-2 text-sm hover:bg-gray-100">
              Design Engineering
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center gap-2 rounded-md p-2 text-sm hover:bg-gray-100">
              Sales &amp; Marketing
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center gap-2 rounded-md p-2 text-sm hover:bg-gray-100">
              Travel
            </a>
          </li>
        </ul>
      </section>

    </div>

    <!-- Footer -->
    <footer class="mt-auto border-t p-2">
      <button class="flex w-full items-center gap-2 rounded-md p-2 text-left hover:bg-gray-100">
        <img src="/avatars/shadcn.jpg" alt="User avatar"
             class="size-8 rounded-lg" />
        <span class="min-w-0 flex-1">
          <span class="block truncate text-sm font-medium">shadcn</span>
          <span class="block truncate text-xs text-gray-500">m@example.com</span>
        </span>
      </button>
    </footer>

  </aside>
</div>
*/