import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import LowPriorityOutlinedIcon from '@mui/icons-material/LowPriorityOutlined';
import ModeOfTravelOutlinedIcon from '@mui/icons-material/ModeOfTravelOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ManageHistoryOutlinedIcon from '@mui/icons-material/ManageHistoryOutlined';
import RowingOutlinedIcon from '@mui/icons-material/RowingOutlined';
import PermDataSettingOutlinedIcon from '@mui/icons-material/PermDataSettingOutlined';


const menuItems = [
  {
    items: [
      {
        name: 'Dashboard',
        icon: DashboardCustomizeOutlinedIcon,
        link: '/dashboard',
      
    },
      {
        name: 'Profile ',
        icon: AssignmentIndOutlinedIcon,
        link: '/accent-header/dashboards',
        items: [
          {
            name: 'Personal Profile  ',
            link: 'management/users/single/1',
            badge: '',
            badgeTooltip: 'Dot indicator with example tooltip'
          },
          {
            name: 'Company Profile  ',
            link: 'dashboards/expenses',
            badge: ''
          },
        ]
      },
      {
        name: 'Enquiry Center',
        icon: HelpCenterOutlinedIcon,
        badge: '',
        badgeTooltip: 'Tokyo contains over 250 data display blocks',
        link: '/accent-header/blocks',
        
      },
      {
        name: 'RFQS ',
        icon: InsightsOutlinedIcon,
        link: '/accent-header/applications',
        items: [
          {
            name: 'RFQ List',
            link: 'applications/calendar'
          },
          {
            name: 'Create RFQ ',
            link: 'applications/file-manager'
          },
          {
            name: 'Received Quotes  ',
            link: 'applications/jobs-platform'
          }
        
        ]
      }
    ]
  },
  {
    // heading: 'Management',
    items: [
      {
        name: 'Orders and Invoices',
        icon: LowPriorityOutlinedIcon,
        link: '/accent-header/management/users',
        items: [
          {
            name: 'Orders List  ',
            link: 'management/users/list'
          },
          {
            name: 'Invoices',
            link: 'management/users/single'
          }
        ]
      },
    
    ]
  },
  {
    heading: 'For Seller ',
    items: [
      {
        name: 'Products ',
        icon: CategoryOutlinedIcon,
        link: '/auth',
        items: [
            {
              name: 'Products List',
              link: '/account/recover-password'
            },
         
          {
            name: 'Add New Product ',
            link: '/account/recover-password'
          },
          {
            name: 'Add Catalog Products ',
            link: '/account/recover-password'
          },
          {
            name: 'Expired and disapproved ',
            link: '/account/recover-password'
          },
          {
            name: 'Draft Product',
            link: '/account/recover-password'
          }
        ]
      }
   
    ]
  },
  {
   items: [
      {
        name: 'Quotations',
        icon: ModeOfTravelOutlinedIcon,
        link: '/auth',
        items: [
            {
              name: 'Create Quote',
              link: '/account/recover-password'
            },
         
          {
            name: 'Quote List   ',
            link: '/account/recover-password'
          },
          {
            name: 'Quotation Settings  ',
            link: '/account/recover-password'
          }
         
        ]
      }
    ]
  },
  {
    items: [
       {
         name: 'Seller Tools ',
         icon: HandymanOutlinedIcon,
         link: '/auth',
         items: [
             {
               name: 'Attributes Definition',
               link: '/account/recover-password'
             },
          
           {
             name: 'Categories',
             link: '/account/recover-password'
           },
           {
             name: 'Brands ',
             link: '/account/recover-password'
           },
           {
            name: 'Keywords',
            link: '/account/recover-password'
          }
          
         ]
       }
     ]
   },
  
   {
    items: [
       {
         name: 'Pricing Settings ',
         icon: MonetizationOnOutlinedIcon,
         link: '/auth',
         items: [
             {
               name: 'Pricing Settings',
               link: '/account/recover-password'
             },
          
           {
             name: 'Discount Levels',
             link: '/account/recover-password'
           },
           
          
         ]
       }
     ]
   },
   {
    items: [
       {
         name: 'Company Site Settings',
         icon:  ManageHistoryOutlinedIcon,
         link: '/auth',
         items: [
             {
               name: 'Searches ',
               link: '/account/recover-password'
             },
          
           {
             name: 'Viewed Products ',
             link: '/account/recover-password'
           },
           {
             name: 'Viewed Suppliers',
             link: '/account/recover-password'
           }
                     
         ]
       }
     ]
   },
   {
    items: [
       {
         name: 'Settings',
         icon: PermDataSettingOutlinedIcon,
         link: '/auth',
         items: [
             {
               name: 'Alerts Preferences ',
               link: '/account/recover-password'
             },
          
           {
             name: 'Email Preferences',
             link: '/account/recover-password'
           },
           {
             name: 'Privacy Settings ',
             link: '/account/recover-password'
           }
                     
         ]
       }
     ]
   },
   {
    items: [
       {
         name: 'Recent Activity ',
         icon: RowingOutlinedIcon,
         link: '/auth',
         items: [
             {
               name: 'Company Details',
               link: '/account/recover-password'
             },
          
           {
             name: 'Your Site Domain',
             link: '/account/recover-password'
           },
           {
             name: 'BranSellers Sub Accounts',
             link: '/account/recover-password'
           }
                     
         ]
       }
     ]
   },
  // {
  //   heading: 'Foundation',
  //   items: [
  //     {
  //       name: 'Overview',
  //       link: '/overview',
  //       icon: DesignServicesTwoToneIcon
  //     },
  //     {
  //       name: 'Documentation',
  //       icon: SupportTwoToneIcon,
  //       link: '/docs'
  //     }
  //   ]
  // }
];

export default menuItems;
