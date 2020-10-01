export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f76326812c348a0a3bbefff',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-vz9dsx8x',
                  apiId: 'd200188f-e277-41fb-9dc5-2ecea005c1f4'
                },
                {
                  buildHookId: '5f76326823f83e007b600159',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-7mpt89rm',
                  apiId: '6090aab5-77f2-41c1-94b8-13fd52e20c8a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shohei-shibata/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-7mpt89rm.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
