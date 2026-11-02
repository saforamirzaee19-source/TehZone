import Icons from "./Icons";

export default function Sidbar() {
  const icons = [
    {
      id: 1,
      icons: [
        "https://cdn.lordicon.com/zrkkrrpl.json",
        "https://cdn.lordicon.com/cnpvyndp.json",
        "https://cdn.lordicon.com/utpmnzxz.json",
        "https://cdn.lordicon.com/pbrgppbb.json",
        "https://cdn.lordicon.com/pmawqxvu.json",
      ],
    },
    {
      id: 2,
      icons: [
        "https://cdn.lordicon.com/hpivxauj.json",
        "https://cdn.lordicon.com/lznlxwtc.json",
        "https://cdn.lordicon.com/btfbysou.json",
        "https://cdn.lordicon.com/rjzlnunf.json",
        "https://cdn.lordicon.com/msoeawqm.json",
      ],
    },
    {
      id: 3,
      icons: [
        "https://cdn.lordicon.com/yhtmwrae.json",
        "https://cdn.lordicon.com/lecprnjb.json",
        "https://cdn.lordicon.com/hrjifpbq.json",
      ],
    },
  ];
  return (
    <div className="sidbar-icons">
      {icons.map((item) => (
        <Icons key={item.id} icon={item.icons} />
      ))}
    </div>
  );
}
