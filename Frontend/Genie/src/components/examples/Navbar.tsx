import Navbar from '../Navbar';

export default function NavbarExample() {
  return (
    <Navbar
      user={{
        name: "Sarah Chen",
        email: "sarah.chen@example.com",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
      }}
      onLogin={() => console.log('Login clicked')}
      onLogout={() => console.log('Logout clicked')}
      onMenuClick={() => console.log('Menu clicked')}
    />
  );
}
