// Copyright (C) 2022 Aragubas <vaiogames18@gmail.com>

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

function imagePreview(element) {
  // Shows the image
  if (!element.classList.contains("imagePreview")) {
    element.classList.add("imagePreview");
    imagePreviewContainer.style.zIndex = 0;
    imagePreviewContainer.style.opacity = 1;
  } else {
    element.classList.remove("imagePreview");
    imagePreviewContainer.style.zIndex = -1;
    imagePreviewContainer.style.opacity = 0;
  }
}
