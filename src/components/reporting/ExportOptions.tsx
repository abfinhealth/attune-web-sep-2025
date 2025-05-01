
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { 
  Download, 
  FileText, 
  Download as DownloadExcel,
  Download as DownloadPowerPoint 
} from 'lucide-react';

type ExportOptionsProps = {
  onExport: (format: 'pdf' | 'excel' | 'powerpoint') => void;
};

const ExportOptions = ({ onExport }: ExportOptionsProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Export Options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => onExport('pdf')}>
          <FileText className="mr-2 h-4 w-4" />
          PDF Document
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onExport('excel')}>
          <DownloadExcel className="mr-2 h-4 w-4" />
          Excel Spreadsheet
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onExport('powerpoint')}>
          <DownloadPowerPoint className="mr-2 h-4 w-4" />
          PowerPoint Presentation
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ExportOptions;
