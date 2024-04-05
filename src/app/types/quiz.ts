export interface Quiz {
  nomor_absen: string;
  nama: string;
  username: string;
  quizDetails: { pin: string; id: number; topic: string };
  showDialog: boolean;
  started: boolean;
}
