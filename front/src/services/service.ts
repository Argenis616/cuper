import http from "../http-common";
import IUsuarioData from "../types/types"

class TutorialDataService {
  getAll() {
    return http.get<Array<IUsuarioData>>("/usuarios");
  }

  get(id: string) {
    return http.get<IUsuarioData>(`/usuarios/${id}`);
  }

  create(data: IUsuarioData) {
    return http.post<IUsuarioData>("/usuarios", data);
  }

  update(data: IUsuarioData, id: any) {
    return http.put<any>(`/usuarios/${id}`, data);
  }

  delete(id: any) {
    return http.delete<any>(`/usuarios/${id}`);
  }
}

export default new TutorialDataService();