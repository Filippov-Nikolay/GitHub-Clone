import React from 'react';
import { useLocation } from 'react-router-dom';
import '../RepositorySettings.css';
import { CollaboratorsSVG, DiscussionsSVG, BranchSVG, TagSVG, RulesSVG, PlaySVG, ModelsSVG, WebhooksSVG, CopilotSVG, EnviromentsSVG, CodespacesSVG, PagesSVG } from '../../../../shared/assets/svg/SvgComponents';

const Sidebar = () => {
  const location = useLocation();

   const menuSections = [
    {
      title: 'Access',
      items: [
        { title: 'Collaborators', path: '/settings/collaborators' },
        { 
          title: 'Moderation options', 
          path: '/settings/moderation', 
          expandable: true,
        },
      ],
    },
    {
      title: 'Code and automation',
      items: [
        { title: 'Branches', path: '/settings/branches' },
        { title: 'Tags', path: '/settings/tags' },
        { title: 'Rules', path: '/settings/rules', expandable: true },
        { title: 'Actions', path: '/settings/actions', expandable: true },
        { title: 'Models', path: '/settings/models', badge: 'Preview' },
        { title: 'Webhooks', path: '/settings/webhooks' },
        { title: 'Copilot', path: '/settings/copilot', expandable: true },
        { title: 'Environments', path: '/settings/environments' },
        { title: 'Codespaces', path: '/settings/codespaces' },
        { title: 'Pages', path: '/settings/pages' },
      ],
    },
  ];

  // Функция для выбора иконки по названию пункта меню
  const getIconByTitle = (title) => {
    switch(title) {
      case 'Collaborators':
        return <CollaboratorsSVG style={{ width: 16, height: 16, flexShrink: 0 }} />;
      case 'Moderation options':
        return <DiscussionsSVG style={{ width: 16, height: 16, flexShrink: 0 }} />;
        case 'Branches':
        return <BranchSVG style={{ width: 16, height: 16, flexShrink: 0 }} />;
        case 'Tags':
        return <TagSVG style={{ width: 16, height: 16, flexShrink: 0 }} />;
          case 'Rules':
        return <RulesSVG style={{ width: 16, height: 16, flexShrink: 0 }} />;
          case 'Actions':
        return <PlaySVG style={{ width: 16, height: 16, flexShrink: 0 }} />;
         case 'Models':
        return <ModelsSVG style={{ width: 16, height: 16, flexShrink: 0 }} />;
           case 'Webhooks':
        return <WebhooksSVG style={{ width: 16, height: 16, flexShrink: 0 }} />;
           case 'Copilot':
        return <CopilotSVG style={{ width: 16, height: 16, flexShrink: 0 }} />;
          case 'Environments':
        return <EnviromentsSVG style={{ width: 16, height: 16, flexShrink: 0 }} />;
          case 'Codespaces':
        return <CodespacesSVG style={{ width: 16, height: 16, flexShrink: 0 }} />;
          case 'Pages':
        return <PagesSVG style={{ width: 16, height: 16, flexShrink: 0 }} />;
      default:
        return <DiscussionsSVG style={{ width: 16, height: 16, flexShrink: 0 }} />; 
    }
  };

  return (
    <aside className="sidebar">
      {menuSections.map((section) => (
        <div key={section.title} className="menu-section">
          <div className="section-title">{section.title}</div>
          <ul className="menu-list">
            {section.items.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <li
                  key={item.title}
                  className={`menu-item ${isActive ? 'active' : ''}`}
                >
                 <a href={item.path} className="item-left" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
  {getIconByTitle(item.title)}
  <span className="item-title">{item.title}</span>
</a>

                  {item.badge && <span className="badge">{item.badge}</span>}
                  {item.expandable && <span className="chevron">⌄</span>}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
