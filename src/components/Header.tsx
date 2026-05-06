import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Gamepad2, User } from 'lucide-react'
import { HashLink } from 'react-router-hash-link'
import { SectionContainer } from "./SectionContainer"
import logo from "@/assets/logo.png"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/#hero' },
    { name: 'About', href: '/#about' },
    { name: 'Committee', href: '/#committee' },
    {
      name: 'Services',
      href: '#',
      dropdown: [
        { name: 'Member Verification', href: '/verification/membership' },
        { name: 'GSC Verification', href: '/verification/gsc' },
        { name: 'New membership', href: '/registration' },
        { name: 'Digitalisation', href: '/registration' },
      ]
    },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'}`}>
      <SectionContainer>
        <div className="flex items-center justify-between gap-8">

          {/* Left Section: Logo + Nav */}
          <div className="flex items-center gap-16">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <img src={logo} alt="IOA Kerala Logo" className="h-14 w-auto" />
            </Link>

            {/* Desktop Navigation - Simple & Composed */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group flex items-center h-full"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.dropdown ? (
                    <button className="flex items-center gap-1.5 text-[11px] font-semibold text-secondary hover:text-primary transition-all uppercase tracking-widest">
                      {item.name} 
                      <ChevronDown size={14} className="opacity-40 group-hover:rotate-180 transition-transform duration-300" />
                    </button>
                  ) : (
                    <HashLink
                      smooth
                      to={item.href}
                      className="text-[11px] font-semibold text-secondary hover:text-primary transition-all relative uppercase tracking-widest"
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-primary transition-all duration-300 group-hover:w-full" />
                    </HashLink>
                  )}

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 w-56 bg-white shadow-xl border border-slate-100 py-3 rounded-lg mt-1 animate-fade-in z-50">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-secondary hover:text-primary hover:bg-slate-50 transition-all"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Right Section: Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <Link to="/registration" className="text-xs uppercase font-semibold text-secondary hover:text-primary transition-colors">
              Register / Login
            </Link>
            <button className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-full text-xs font-bold transition-all shadow-md flex items-center gap-2">
              <Gamepad2 size={16} />
              Quiz
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2 text-secondary" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </SectionContainer>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t border-slate-100 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <SectionContainer>
          <div className="py-8 flex flex-col gap-6">
            {navItems.map((item) => (
              <div key={item.name} className="space-y-4">
                {item.dropdown ? (
                  <div className="space-y-3">
                    <p className="text-[10px] font-bold text-secondary/30 uppercase tracking-widest">{item.name}</p>
                    {item.dropdown.map(subItem => (
                      <Link key={subItem.name} to={subItem.href} className="block text-sm font-medium text-secondary/70 hover:text-primary pl-4">
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <HashLink
                    smooth
                    to={item.href}
                    className="text-sm font-medium text-secondary/70 hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </HashLink>
                )}
              </div>
            ))}
            <div className="pt-6 border-t border-slate-100 flex flex-col gap-4">
              <Link to="/registration" className="text-sm font-semibold text-primary">Register / Login</Link>
              <button className="bg-primary text-white py-4 rounded-xl font-bold text-sm text-center">Quiz Competition</button>
            </div>
          </div>
        </SectionContainer>
      </div>
    </header>
  )
}

export default Header
