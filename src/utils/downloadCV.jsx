const FILE_NAME = 'Vikram_Singh_Bisht_CV.pdf'

export async function downloadCV() {
  const [{ pdf }, { default: CVDocument }] = await Promise.all([
    import('@react-pdf/renderer'),
    import('../cv/CVDocument'),
  ])

  const blob = await pdf(<CVDocument />).toBlob()
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = FILE_NAME
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
