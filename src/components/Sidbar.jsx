import Icons from "./Icons";

export default function Sidbar() {
  const icons = [
    {
      id: 1,
      icon: [
        { src: "https://cdn.lordicon.com/zrkkrrpl.json", label: "Add" },
        { src: "https://cdn.lordicon.com/cnpvyndp.json", label: "Home" },
        { src: "https://cdn.lordicon.com/utpmnzxz.json", label: "Offers" },
        { src: "https://cdn.lordicon.com/pbrgppbb.json", label: "Shopping" },
        { src: "https://cdn.lordicon.com/pmawqxvu.json", label: "Delivery" },
      ],
    },
    {
      id: 2,
      icon: [
        { src: "https://cdn.lordicon.com/hpivxauj.json", label: "Messages" },
        { src: "https://cdn.lordicon.com/lznlxwtc.json", label: "Notifications" },
        { src: "https://cdn.lordicon.com/btfbysou.json", label: "Analytics" },
        { src: "https://cdn.lordicon.com/rjzlnunf.json", label: "Favorites" },
        { src: "https://cdn.lordicon.com/msoeawqm.json", label: "Search" },
      ],
    },
    {
      id: 3,
      icon: [
        { src: "https://cdn.lordicon.com/yhtmwrae.json", label: "Information" },
        { src: "https://cdn.lordicon.com/lecprnjb.json", label: "Settings" },
        { src: "https://cdn.lordicon.com/hrjifpbq.json", label: "Profile" },
      ],
    },
  ];
  return (
    <div className="sidbar-icons">
      {icons.map((item) => (
        <Icons key={item.id} icon={item.icon} />
      ))}
    </div>
  );
}
