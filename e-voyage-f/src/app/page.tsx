import { redirect } from 'next/navigation';
export default function Home({}) {
  var type = "viite";

  if(type === "admin")
    redirect('/admin/default');
  if(type === "propri")
    redirect('/proprietaire/default');
  else redirect('/visiteur/default');
}
