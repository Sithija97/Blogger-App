import { SectionTemplate } from "../templates/section";

export const AdminDashboard = () => {
  return (
    <SectionTemplate title="Admin Dashboard" customStyles="ml-4">
      <div className="flex flex-col gap-8 lg:gap-4 px-20 h-[calc(100vh-140px)] overflow-y-auto">
        admin insights
      </div>
    </SectionTemplate>
  );
};
