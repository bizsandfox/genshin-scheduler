import DomainService from "../service/DomainService";
import MaterialService from "../service/MaterialService";
import TalentService from "../service/TalentService";
import Grid from "./Grid";

function Weeks({
  weaponTasks,
  talentTasks,
}: {
  weaponTasks: any[];
  talentTasks: any[];
}) {
  const daysOfWeek = ["월", "화", "수", "목", "금", "토", "일"];

  return (
    <Grid columns={7} gap={""}>
      {daysOfWeek.map((day, index) => (
        <div key={index}>
          <div>{day}</div>
          <div>
            {weaponTasks.map((task) => {
              const material = MaterialService.getMaterial(task.labels[0]);
              if (material?.weeks.includes(day)) {
                const domain = DomainService.getDomain(material.domain);
                return (
                  <div>
                    {domain?.name}-{task.name}
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
          <div>
            {talentTasks.map((task) => {
              const material = TalentService.getMaterial(task.labels[0]);
              if (material?.weeks.includes(day)) {
                const domain = DomainService.getDomain(material.domain);
                return (
                  <div>
                    {domain?.name}-{task.name}
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      ))}
    </Grid>
  );
}

export default Weeks;
