export const api_url = 'http://192.168.200.100:8000/api';

export const API_ENDPOINTS = {
  //user
  SIDEBAR: (userId: string) => `${api_url}/user/${userId}/sidebars`,
  REGISTER: `${api_url}/register`,
  LOGIN: `${api_url}/login`,

  //sidebar
  SYNC_SIDEBAR: `${api_url}/sync-user-sidebars`,
  GETSIDEBAR: `${api_url}/getallusersidebar`,
  UPDATE_STATUS_SIDEBAR: `${api_url}/sidebars/update-status`,

  //finansial
  FINANCIAL: `${api_url}/finansial`,
  GETALLFINANCIAL: `${api_url}/getallfinansial`,
  GETFINANCIALBYID: (id: string) => `${api_url}/getfinansialbyid/${id}`,
  GETFINANCIALBYNOMORREKENING: (nomorRekening: string) => `${api_url}/getfinansialbynomorrekening/${nomorRekening}`,
  GETFINANCIALBYCIF: (cif: string) => `${api_url}/getfinansialbycif/${cif}`,
  UPDATEFINANCIALBYID: (id: string) => `${api_url}/updatefinansialbyid/${id}`,
  DELETEFINANCIALBYID: (id: string) => `${api_url}/deletefinansialbyid/${id}`,
  
  //aspek
  ASPEKFORM: `${api_url}/aspek`, 
  GETALLASPEK: `${api_url}/getallaspek`,
  GETASPEKBYNOMORREKENING: (nomorRekening: string) => `${api_url}/getaspekbynomorrekening/${nomorRekening}`,

  //limac
  LIMAC: `${api_url}/limac`,
  GETALLLIMAC: `${api_url}/getalllimac`,
  GETLIMACBYID: (id: string) => `${api_url}/getlimacbyid/${id}`,
  GETLIMACBYNOMORREKENING: (nomorRekening: string) => `${api_url}/getlimacbynomorrekening/${nomorRekening}`,
  UPDATELIMACBYID: (id: string) => `${api_url}/updatelimacbyid/${id}`,
  DELETELIMACBYID: (id: string) => `${api_url}/deletelimacbyid/${id}`,

  //pemohon
  PEMOHON: `${api_url}/pemohon`,
  GETPEMOHONBYID: (id: string) => `${api_url}/getpemohonbyid/${id}`,
  UPDATEPEMOHONBYID: (id: string) => `${api_url}/updatepemohonbyid/${id}`,
  DELETEPEMOHONBYID: (id: string) => `${api_url}/deletepemohonbyid/${id}`,
  GETALLPEMOHON:`${api_url}/getallpemohon`,
  GETNASABAH: `${api_url}/getregisternasabah`,
  GETNASABAHID:(value : string) => `${api_url}/pemohon/${value}`,

  //survey
  GETSURVEY: `${api_url}/getSurvey`,
  ADDSURVEY: `${api_url}/addSurvey`,
  GETALLSURVEY: `${api_url}/getallsurvey`,
  GETALLSURVEYBYNOMORREKENING: (nomorRekening: string) => `${api_url}/getallsurveybynomorrekening/${nomorRekening}`,
  
  //produk
  GETSEKTOREKONOMI: `${api_url}/getsektorekonomi`,
  GETALLPRODUK: `${api_url}/getallproduk`,
  GETPRODUKBYCIF: (cif: string) => `${api_url}/getprodukbycif/${cif}`,
  GETPRODUKBYID: (id: string) => `${api_url}/getprodukbyid/${id}`,
  DELETEPRODUKBYID: (NomorRekening: string) => `${api_url}/deleteprodukbyid/${NomorRekening}`,

  //sifat kredit
  GETSIFATKREDIT: `${api_url}/getsifatkredit`,
  ADDPRODUK: `${api_url}/produk`,
  UPDATEPENGAJUANBYID: (id: string) => `${api_url}/updatepengajuanbyid/${id}`,


  //pengajuan kredit
  GETGOLONGANKREDIT: `${api_url}/getgolongankredit`,
  
  ADDJAMINAN: `${api_url}/jaminan`,
  GETALLJAMINAN: `${api_url}/getalljaminan`,
  GETJAMINANBYID: (id: string) => `${api_url}/getjaminanbyid/${id}`,
  UPDATEJAMINANBYID: (id: string) => `${api_url}/updatejaminanbyid/${id}`,
  DELETEJAMINANBYID: (id: string) => `${api_url}/deletejaminanbyid/${id}`,
  GETJAMINANBYNOMORREKENING: (nomorRekening: string) => `${api_url}/getjaminanbynomorrekening/${nomorRekening}`,

  //tambah title aspek
  TAMBAHTITLEASPEK: `${api_url}/tambahTitleAspek`,
  GETTITLEASPEK: `${api_url}/gettitleaspek`,
  UPDATETITLEASPEKBYID: (id: string) => `${api_url}/updatetitleaspekbyid/${id}`,
  DELETETITLEASPEKBYID: (id: string) => `${api_url}/deletetitleaspekbyid/${id}`,

  //tambah jenis agunan
  TAMBAHJENISAGUNAN: `${api_url}/tambahjenisagunan`,
  GETJENISAGUNAN: `${api_url}/getjenisagunan`,
  DELETEJENISAGUNANBYID: (id: string) => `${api_url}/deletejenisagunanbyid/${id}`,

  //tambah hak milik
  TAMBAHHAKMILIK: `${api_url}/tambahhakmilik`,
  GETHAKMILIK: `${api_url}/gethakmilik`,
  DELETEHAKMILIKBYID: (id: string) => `${api_url}/deletehakmilikbyid/${id}`,

  //tambah tipe
  TAMBAHTIPE: `${api_url}/tambahtipe`,
  GETTIPE: `${api_url}/gettipe`,
  DELETETIPEBYID: (id: string) => `${api_url}/deletetipebyid/${id}`,
};