import { AppState } from "../AppState.js"
import { Project } from "../models/Project.js"
import { SandboxApi } from "./AxiosService.js"

class ProjectsService {

  async getProjects() {
    AppState.projects = [] // NOTE empty the projects to avoid data flashing
    const res = await SandboxApi.get('api/projects')
    AppState.projects = res.data.map(p => new Project(p))
  }

  async getProjectsByCreatorId(creatorId) {
    AppState.projects = [] // NOTE empty the projects to avoid data flashing
    const res = await SandboxApi.get('api/projects', {
      params: {
        creatorId
      }
    })

    AppState.projects = res.data.map(p => new Project(p))

  }

}




export const projectsService = new ProjectsService()
