export interface taskApi {
  id: number;
  image: string;
  title: string;
  description: string;
  domain: string;
  nombre_heures: number;
  progression: number;
  participants: string[];
  essence_of_assessment: string[];
}

export interface TaskModel {
  id: number;
  image: string;
  title: string;
  description: string;
  domain: string;
  timeNumber: string;
  progression: number;
  participants: string[];
  essenceOfAssessment: string[];
}

export function mapFromApi(data: taskApi): TaskModel {
       function convertToDaysAndHours(hours:number) {
              if (hours < 24) {
                  return `${Math.floor(hours)} hours`;
              } else {
                  const days = Math.floor(hours / 24);
                  const remainingHours = hours % 24;
                  return `${days} day ${remainingHours} H`;
              }
          }
  return {
    id: data.id,
    image: data.image,
    title: data.title,
    description: data.description,
    domain: data.domain,
    timeNumber: convertToDaysAndHours(data.nombre_heures),
    progression: data.progression *100,
    participants: data.participants,
    essenceOfAssessment: data.essence_of_assessment,
  };
}
