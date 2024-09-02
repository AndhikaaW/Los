export const api_url = 'http://192.168.1.35:8000/api';

export const API_ENDPOINTS = {
  REGISTER: `${api_url}/register`,
  LOGIN: `${api_url}/login`,

  FINANCIAL: `${api_url}/finansial`,
  ASPEKFORM: `${api_url}/aspekform`,
  LIMAC: `${api_url}/limac`,
  PEMOHON: `${api_url}/pemohon`,

  GETALLPEMOHON:`${api_url}/getallpemohon`,
  GETNASABAH: `${api_url}/getregisternasabah`,
  GETSURVEY: `${api_url}/getSurvey`,

  // GETSIDEBAR: `${api_url}/getsidebar`,
  
  SYNC_SIDEBAR: `${api_url}/sync-user-sidebars`,
  GETSIDEBAR: `${api_url}/getallusersidebar`,
  UPDATE_STATUS_SIDEBAR: `${api_url}/sidebars/update-status`,
  
  GETSEKTOREKONOMI: `${api_url}/getsektorekonomi`,

  GETALLPRODUK: `${api_url}/getallproduk`,
  GETSIFATKREDIT: `${api_url}/getsifatkredit`,
  ADDPRODUK: `${api_url}/produk`,

  GETTITLEASPEK: `${api_url}/gettitleaspek`,

  // GETQUESTION: `${api_url}/survey/{id}/pertanyaan`,
};