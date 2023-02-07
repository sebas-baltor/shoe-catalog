import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset= process.env.NEXT_PUBLIC_SANITY_DATASET ||"production";

export default defineConfig({
  name: 'default',
  basePath:"/studio",
  title: 'shoe_catalog',
  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

})
