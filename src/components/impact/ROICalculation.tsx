
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Slider } from '@/components/ui/slider';
import { Calculator, TrendingUp } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface InitiativeROI {
  name: string;
  implementation: number;
  ongoing: number;
  benefits: {
    direct: number;
    indirect: number;
  };
  timeframe: number;
}

// Mock initiatives with ROI data
const initiatives: InitiativeROI[] = [
  {
    name: 'Financial Education Program',
    implementation: 50000,
    ongoing: 15000,
    benefits: {
      direct: 35000,
      indirect: 90000
    },
    timeframe: 12
  },
  {
    name: 'Mobile Banking Enhancement',
    implementation: 120000,
    ongoing: 25000,
    benefits: {
      direct: 60000,
      indirect: 180000
    },
    timeframe: 18
  },
  {
    name: 'First-Time Homebuyer Program',
    implementation: 75000,
    ongoing: 20000,
    benefits: {
      direct: 95000,
      indirect: 110000
    },
    timeframe: 24
  }
];

const ROICalculation = () => {
  const [selectedInitiative, setSelectedInitiative] = useState<InitiativeROI>(initiatives[0]);
  const [indirectBenefitFactor, setIndirectBenefitFactor] = useState<number>(0.6);
  
  // Calculate ROI components
  const calculateROI = (initiative: InitiativeROI, indirectFactor: number) => {
    const totalCost = initiative.implementation + (initiative.ongoing * initiative.timeframe / 12);
    const totalDirectBenefit = initiative.benefits.direct * initiative.timeframe / 12;
    const totalIndirectBenefit = initiative.benefits.indirect * indirectFactor * initiative.timeframe / 12;
    const totalBenefit = totalDirectBenefit + totalIndirectBenefit;
    
    const netBenefit = totalBenefit - totalCost;
    const roi = (netBenefit / totalCost) * 100;
    const paybackPeriod = totalCost / (totalBenefit / initiative.timeframe);
    
    return {
      totalCost,
      totalDirectBenefit,
      totalIndirectBenefit,
      totalBenefit,
      netBenefit,
      roi,
      paybackPeriod
    };
  };
  
  const roiData = calculateROI(selectedInitiative, indirectBenefitFactor);
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD',
      maximumFractionDigits: 0 
    }).format(value);
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          <div className="flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            ROI Calculation Framework
          </div>
        </CardTitle>
        <CardDescription>
          Calculate and visualize return on investment for financial health initiatives
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Select Initiative</label>
              <Select
                value={selectedInitiative.name}
                onValueChange={(value) => {
                  const initiative = initiatives.find(i => i.name === value);
                  if (initiative) setSelectedInitiative(initiative);
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select initiative" />
                </SelectTrigger>
                <SelectContent>
                  {initiatives.map((initiative) => (
                    <SelectItem key={initiative.name} value={initiative.name}>
                      {initiative.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-medium">Indirect Benefit Confidence Factor</label>
                <span className="text-sm">{(indirectBenefitFactor * 100).toFixed(0)}%</span>
              </div>
              <Slider
                defaultValue={[indirectBenefitFactor * 100]}
                max={100}
                step={1}
                onValueChange={(value) => setIndirectBenefitFactor(value[0] / 100)}
              />
              <p className="text-xs text-gray-500">
                Adjust this factor based on your confidence in measuring indirect benefits
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Initiative Details</h3>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <p className="text-sm text-gray-500">Implementation Cost</p>
                  <p className="text-sm font-medium text-right">{formatCurrency(selectedInitiative.implementation)}</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <p className="text-sm text-gray-500">Annual Ongoing Cost</p>
                  <p className="text-sm font-medium text-right">{formatCurrency(selectedInitiative.ongoing)}</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <p className="text-sm text-gray-500">Annual Direct Benefits</p>
                  <p className="text-sm font-medium text-right">{formatCurrency(selectedInitiative.benefits.direct)}</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <p className="text-sm text-gray-500">Annual Indirect Benefits</p>
                  <p className="text-sm font-medium text-right">{formatCurrency(selectedInitiative.benefits.indirect)}</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <p className="text-sm text-gray-500">Measurement Timeframe</p>
                  <p className="text-sm font-medium text-right">{selectedInitiative.timeframe} months</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-gray-50 rounded-lg p-6 h-full">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">ROI Summary</h3>
                <div className="flex items-center gap-1">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="font-bold text-green-600">{roiData.roi.toFixed(1)}% ROI</span>
                </div>
              </div>
              
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="border-t">Total Costs</TableCell>
                    <TableCell className="text-right border-t">{formatCurrency(roiData.totalCost)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Direct Benefits</TableCell>
                    <TableCell className="text-right">{formatCurrency(roiData.totalDirectBenefit)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="flex flex-col">
                        <span>Indirect Benefits</span>
                        <span className="text-xs text-gray-500">(with {(indirectBenefitFactor * 100).toFixed(0)}% confidence)</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">{formatCurrency(roiData.totalIndirectBenefit)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Total Benefits</TableCell>
                    <TableCell className="text-right font-medium">{formatCurrency(roiData.totalBenefit)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-green-600">Net Benefit</TableCell>
                    <TableCell className="text-right font-medium text-green-600">{formatCurrency(roiData.netBenefit)}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-sm font-medium">Return on Investment (ROI)</p>
                  <p className="text-2xl font-bold text-green-600">{roiData.roi.toFixed(1)}%</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium">Payback Period</p>
                  <p className="text-lg font-semibold">
                    {roiData.paybackPeriod.toFixed(1)} months
                    <span className="text-sm font-normal text-gray-500 ml-2">
                      ({(roiData.paybackPeriod / 12).toFixed(1)} years)
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ROICalculation;
