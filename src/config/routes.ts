export const routes = {
  project: {
    projectDetails: (slug: string) => `/profile/project/${slug}`,
    projectEdit: (projectId: string) => `/profile/project/edit/${projectId}`,
  },

  profileGeneral: '/profile/general',
  profile: '/profile',
  explore: '/',
  lobby: '/lobby',
};
