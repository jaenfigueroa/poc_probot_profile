module.exports.MOVE_CARD = `
  mutation(
    $fieldId: ID!,
    $itemId: ID!,
    $projectId: ID!,
    $value: ProjectV2FieldValue!)
    {
    updateProjectV2ItemFieldValue(
      input: {
        fieldId: $fieldId
        itemId: $itemId 
        projectId: $projectId
        value: $value
      }
    ) {
      clientMutationId
    }
  }
`
