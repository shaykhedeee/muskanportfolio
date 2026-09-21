Add-Type -AssemblyName System.Drawing

$srcPath = "c:\Users\zebbr\OneDrive\Documents\muskanpareek.com\public\references\4f1a68a2-f9d9-4baf-b6d9-a65e45da5431.jpg"
$destPath = "c:\Users\zebbr\OneDrive\Documents\muskanpareek.com\public\references\calm-house-axonometric.jpg"

$srcBmp = [System.Drawing.Image]::FromFile($srcPath)
Write-Output "Original Size: $($srcBmp.Width) x $($srcBmp.Height)"

# Crop coordinates for the 3D room axonometric:
# From x=290, y=100, width=580, height=660
$rect = New-Object System.Drawing.Rectangle(290, 100, 580, 660)
$croppedBmp = New-Object System.Drawing.Bitmap(580, 660)
$graphics = [System.Drawing.Graphics]::FromImage($croppedBmp)
$graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$graphics.DrawImage($srcBmp, (New-Object System.Drawing.Rectangle(0, 0, 580, 660)), $rect, [System.Drawing.GraphicsUnit]::Pixel)

$croppedBmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)

$graphics.Dispose()
$croppedBmp.Dispose()
$srcBmp.Dispose()

Write-Output "Cropped axonometric successfully saved to $destPath"
