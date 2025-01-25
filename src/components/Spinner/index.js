import BeatLoader from "react-spinners/BeatLoader";

export function Spinner({ color = '#FFFFFF', size = 30, loading = false }) {
  return (
    <BeatLoader 
      loading={loading}
      size={size}
      color={color}
      aria-label="Carregando"
      data-testid="loader"
      style={{ margin: '5px' }}
    />
  )
}