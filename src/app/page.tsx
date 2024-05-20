import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-4 p-24">
      <Button type="button">Shadcn Ui</Button>
      <ThemeToggle />
    </main>
  );
}
