# Attribution-NonCommercial-NoDerivatives 4.0 International
# Copyright (c) 2024-2025 EJPG-SYS
$hexHashAngularImpl = (Get-FileHash -Path "ejpg-angular-impl.min.js" -Algorithm SHA384).Hash
$bytesAngularImpl = [byte[]]::new($hexHashAngularImpl.Length / 2)
for ($i = 0; $i -lt $hexHashAngularImpl.Length; $i += 2) {
    $bytesAngularImpl[$i/2] = [convert]::ToByte($hexHashAngularImpl.Substring($i, 2), 16)
}
[Convert]::ToBase64String($bytesAngularImpl)
$hexHashBootstrapImpl = (Get-FileHash -Path "ejpg-bootstrap-impl.min.css" -Algorithm SHA384).Hash
$bytesBootstrapImpl = [byte[]]::new($hexHashBootstrapImpl.Length / 2)
for ($i = 0; $i -lt $hexHashBootstrapImpl.Length; $i += 2) {
    $bytesBootstrapImpl[$i/2] = [convert]::ToByte($hexHashBootstrapImpl.Substring($i, 2), 16)
}
[Convert]::ToBase64String($bytesBootstrapImpl)
