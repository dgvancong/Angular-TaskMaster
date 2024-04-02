export interface Team {
  teamID: number;
  teamName: string;
  create_at: string;
  updated_at: string;
}

export interface ResponseData {
  data: Team[];
}
