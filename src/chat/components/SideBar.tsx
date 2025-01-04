import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageSquare, Settings } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface Chat {
  id: number;
  name: string;
  lastMessage: string;
  avatarUrl?: string;
}

const mockChats: Chat[] = [
  {
    id: 1,
    name: "Juan Pérez",
    lastMessage: "¿Cómo estás?",
    avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "María López",
    lastMessage: "Nos vemos mañana.",
    avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Carlos Sánchez",
    lastMessage: "Revisa el documento.",
    avatarUrl: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

const formSchema = z.object({
  phoneNumber: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(10, { message: "Phone number cannot exceed 10 digits" }),
});

export const SideBar = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumber: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const [searchTerm, setSearchTerm] = useState("");

  const filteredChats = mockChats.filter((chat) =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <aside className="h-[90%] w-80 bg-card text-card-foreground flex flex-col shadow-lg border-r border-border">
      {/* Encabezado */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <h1 className="text-lg font-semibold">Chats</h1>
        <Button variant="ghost" size="icon" aria-label="Settings">
          <Settings className="w-5 h-5" />
        </Button>
      </div>

      {/* Barra de búsqueda */}
      <div className="p-4">
        <Input
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Lista de Chats */}
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-2 p-4">
          {filteredChats.map((chat) => (
            <li key={chat.id}>
              <Link to={`/chats/${chat.id}`}>
                <Button
                  variant="ghost"
                  className="w-full h-14 flex items-center rounded-lg hover:bg-muted"
                >
                  <Avatar className="mr-3">
                    {chat.avatarUrl ? (
                      <AvatarImage src={chat.avatarUrl} alt={chat.name} />
                    ) : (
                      <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
                    )}
                  </Avatar>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-medium">{chat.name}</p>
                    <p className="text-xs text-muted-foreground truncate">
                      {chat.lastMessage}
                    </p>
                  </div>
                  <MessageSquare className="w-4 h-4 text-muted-foreground" />
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Pie de página */}
      <div className="p-4 border-t border-border">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline" className="w-full">
              Nuevo Chat
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Create new chat</AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogDescription></AlertDialogDescription>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>phone number</FormLabel>
                      <FormControl>
                        <Input placeholder="302 3240 ..." {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>

            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </aside>
  );
};
