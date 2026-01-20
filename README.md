# nMon Windows Agent

A Windows service agent for system monitoring that collects and reports system information.

## Features

- Monitors system information (CPU, memory, disk, network)
- Runs as a Windows service
- Collects and sends data to a central gateway
- Built-in Node.js runtime (no external dependencies required)

## Installation

### Using the Pre-built Executable

1. Download `nmonagent.exe` from the `dist` folder
2. Run `configure.cmd` as Administrator
3. Enter your server key and gateway address when prompted
4. The service will be installed and started automatically

### Manual Installation

1. Install Node.js (if not using the executable)
2. Clone this repository
3. Run `npm install` to install dependencies
4. Use `configure.cmd` to set up the service

## Building from Source

### Prerequisites

- Node.js v18 or later
- npm v7 or later

### Build Steps

```bash
# Install dependencies
npm install

# Build the executable
npm run build
```

The executable will be created in the `dist` folder as `nmonagent.exe`.

### Build Configuration

The build process uses [pkg](https://github.com/vercel/pkg) to create a standalone executable that includes:
- Node.js runtime (v18)
- All npm dependencies
- Application scripts (main.js, service.js)
- Configuration files

## Usage

### Service Commands

```cmd
REM Configure and start the service
configure.cmd

REM Remove the service
remove.cmd
```

### Service Arguments

The service requires two arguments:
1. **Server Key**: Unique identifier for your server
2. **Gateway**: URL endpoint where monitoring data will be sent

## Development

### Dependencies

- **axios**: HTTP client for sending monitoring data
- **os-service**: Windows service management
- **systeminformation**: System information library
- **fs**, **os**, **path**, **url**: Node.js core modules

### Project Structure

```
.
├── main.js           # Main application logic
├── service.js        # Service management
├── configure.cmd     # Service installation script
├── remove.cmd        # Service removal script
├── icon.ico          # Application icon
├── nodejs/           # Embedded Node.js runtime
└── dist/             # Build output folder
```

## Upgrading

### What's New in v2.0.0

- ✅ Replaced deprecated `request` package with `axios`
- ✅ Updated to use modern HTTP client with better error handling
- ✅ Added pkg build configuration for creating standalone executables
- ✅ Improved logging for HTTP errors
- ✅ Added .gitignore for better repository management

## Security

### Known Issues

- The `pkg` package (used as a dev dependency for building executables) has a moderate severity vulnerability (GHSA-22r3-9w55-cj54) related to local privilege escalation during the build process. This does not affect the runtime security of the built executable, as pkg is only used during the build phase and is not included in the final distributable.

### Auditing

Run `npm audit` to check for vulnerabilities in dependencies. The application uses well-maintained packages with active security monitoring.

## License

MIT License - see LICENSE file for details

## Author

Original by Codeniner
Updated and maintained by mlgtcode
