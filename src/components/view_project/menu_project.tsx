import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "../ui/menubar";

export const MenuProject = () => {
  return (
    <div className="flex w-full justify-center mt-5">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>All Project</MenubarTrigger>
          <MenubarContent></MenubarContent>
          <MenubarTrigger>Web Project</MenubarTrigger>
          <MenubarContent></MenubarContent>
          <MenubarTrigger>AI Project</MenubarTrigger>
          <MenubarContent></MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};
