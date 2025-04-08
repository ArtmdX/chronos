import { Link } from 'react-router';

type RouterLinkProps = React.ComponentProps<'a'> & {
  children: React.ReactNode;
  href: string;
};

export function RouterLink({ children, href, ...props }: RouterLinkProps) {
  return (
    <Link {...props} to={href}>
      {children}
    </Link>
  );
}
