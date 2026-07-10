#!/usr/bin/env bash
set -euo pipefail

if ! command -v sips >/dev/null 2>&1; then
  echo "This helper currently requires macOS sips." >&2
  exit 1
fi

generate_variant() {
  local source="$1"
  local width="$2"
  local stem="${source%.*}"
  local extension="${source##*.}"
  local output="${stem}-${width}.${extension}"

  if [[ -f "$output" && "$source" -ot "$output" ]]; then
    return
  fi

  if [[ "$extension" == "jpg" || "$extension" == "jpeg" ]]; then
    sips -Z "$width" -s format jpeg -s formatOptions 80 "$source" --out "$output" >/dev/null
  else
    sips -Z "$width" -s format png "$source" --out "$output" >/dev/null
  fi
  echo "Generated ${output}"
}

assets=(
  public/logo-no-text.png
  public/cocoda-logo.png
  public/regtech4ai-logo.png
  public/regulaire-logo.png
  public/redd-logo.png
  public/team/konrad.jpg
  public/team/qian.jpg
  public/team/kamil.jpg
  public/team/bram.jpg
  public/team/lucas.jpg
  public/team/ishitaa.jpg
  public/team/henry.jpg
  public/team/defne.jpg
  public/team/dick.jpg
)

for asset in "${assets[@]}"; do
  generate_variant "$asset" 96
  generate_variant "$asset" 192
done
