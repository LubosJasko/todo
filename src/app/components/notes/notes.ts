export interface Notes {
  id: number;
  title: string;
}

declare var language: Language;

export interface Language {
  Lang_Name_Cz: string;
  headerTitle: string;
  todos: string;
  detail: string;
  new: string;
  deleteAll: string;
  delete: string;
  edit: string;
  save: string;
}
